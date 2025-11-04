"use client";

import { useState, FormEvent, useEffect } from "react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { validateEmail, validateRequired } from "@/utils/validation";
import { trackFormSubmission } from "@/lib/analytics";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Auto-hide success/error message after 5 seconds
  useEffect(() => {
    if (submitStatus === "success" || submitStatus === "error") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!validateRequired(formData.name)) {
      newErrors.name = "Name is required";
    }

    if (!validateRequired(formData.email)) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!validateRequired(formData.subject)) {
      newErrors.subject = "Subject is required";
    }

    if (!validateRequired(formData.message)) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // For static export, we use mailto: as a fallback
      // TODO: Integrate with a form service like Formspree, Netlify Forms, or EmailJS
      // Example: const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", { ... })
      
      const emailBody = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || "Not provided"}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:info@egtsoftware.com?subject=${encodeURIComponent(formData.subject)}&body=${emailBody}`;
      
      // Open mail client
      window.location.href = mailtoLink;
      
      // Simulate success (user will send email via their mail client)
      setSubmitStatus("success");
      trackFormSubmission("Contact Form");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Success Message - Above Form */}
      {submitStatus === "success" && (
        <div className="rounded-lg bg-green-50 border-2 border-green-200 p-4 animate-fadeInUp">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm font-semibold text-green-800">
              Thank you for your message! We&apos;ll get back to you soon.
            </p>
          </div>
        </div>
      )}

      {/* Error Message - Above Form */}
      {submitStatus === "error" && (
        <div className="rounded-lg bg-red-50 border-2 border-red-200 p-4 animate-fadeInUp">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm font-semibold text-red-800">
              Something went wrong. Please try again later.
            </p>
          </div>
        </div>
      )}

      <Input
        label="Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        required
        autoComplete="name"
      />

      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
        autoComplete="email"
      />

      <Input
        label="Phone"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
        autoComplete="tel"
      />

      <Input
        label="Subject"
        name="subject"
        type="text"
        value={formData.subject}
        onChange={handleChange}
        error={errors.subject}
        required
      />

      <Textarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        rows={6}
        required
      />

      <Button
        type="submit"
        variant="primary"
        fullWidth
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

