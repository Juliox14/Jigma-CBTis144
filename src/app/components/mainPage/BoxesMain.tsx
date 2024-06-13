"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface BoxesMainProps {
    title: string;
    description: string;
    linkCertifcate: string;
}

export default function BoxesMain({title, description, linkCertifcate}:BoxesMainProps) {
    return (
        <motion.div className="p-4 bg-gray-200 rounded-lg shadow-lg w-[90%] cursor-pointer" whileHover={{scale: 1.04}}>
            <Link href="#">
                <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </Link>
        </motion.div>
    );
}
