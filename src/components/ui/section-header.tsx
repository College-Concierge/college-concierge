
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const SectionHeader = ({
  title,
  description,
  className = '',
  titleClassName = '',
  descriptionClassName = ''
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`text-center mb-12 ${className}`}
    >
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleClassName}`}>{title}</h2>
      {description && (
        <p className={`text-muted-foreground max-w-2xl mx-auto ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
