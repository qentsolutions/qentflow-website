import AWS from "aws-sdk";
import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  company: z.string().optional(),
  email: z.string().email("Invalid email format"),
  phoneNumber: z.string().optional(),
  message: z.string(),
});

export async function POST(req: Request) {
  const ses = new AWS.SES({
    region: process.env.NEXT_AWS_REGION,
    accessKeyId: process.env.NEXT_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_AWS_SECRET_ACCESS_KEY,
  });

  try {
    const body = await req.json();

    // Validation des données avec Zod
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return new NextResponse(JSON.stringify(result.error.flatten()), {
        status: 400,
      });
    }

    const { firstName, lastName, company, email, message } = result.data;

    // Générer un lien Google Meet
    const meetLink = "https://meet.google.com/new"; // Lien pour créer une nouvelle réunion

    const formattedMessage = `
New Message from Contact Form:

Name: ${firstName} ${lastName}
Company: ${company}
Email: ${email}

Message:
${message}

You can join the meeting using this link: ${meetLink}
    `;

    // Vérifiez que les variables d'environnement sont définies
    if (!process.env.NEXT_AWS_SES_FROM_EMAIL) {
      return new NextResponse("Sender email is not configured", {
        status: 500,
      });
    }

    const params = {
      Destination: {
        ToAddresses: [email], // Encapsulez l'email dans un tableau
      },
      Message: {
        Body: {
          Text: {
            Data: formattedMessage,
          },
        },
        Subject: {
          Data: "New message from contact form",
        },
      },
      Source: process.env.NEXT_AWS_SES_FROM_EMAIL, // Remplacez par l'adresse email de l'expéditeur
    };

    await ses.sendEmail(params).promise();
    return new NextResponse("Message sent successfully", { status: 200 });
  } catch (error) {
    console.error("Error sending message:", error);
    return new NextResponse("Failed to send message", { status: 500 });
  }
}
