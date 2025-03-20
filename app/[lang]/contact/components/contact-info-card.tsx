"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
  index: number;
}

export function ContactInfoCard({ icon: Icon, title, value, description, index }: ContactInfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-900 font-medium mb-1">{value}</p>
      <p className="text-gray-500 text-sm">{description}</p>
    </motion.div>
  );
}