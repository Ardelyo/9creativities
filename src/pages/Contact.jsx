import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-blue via-white to-navy-blue text-navy-blue p-4">
      <Link to="/" className="inline-block mb-4">
        <Button variant="ghost" className="text-navy-blue">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
      </Link>
      <motion.div 
        className="max-w-md mx-auto bg-white rounded-3xl shadow-lg p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <form>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <Input id="name" type="text" placeholder="Your Name" className="w-full rounded-full" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <Input id="email" type="email" placeholder="your@email.com" className="w-full rounded-full" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <Textarea id="message" placeholder="Your message here..." className="w-full rounded-2xl" rows={4} />
            </div>
            <Button type="submit" className="w-full rounded-full">Send Message</Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;