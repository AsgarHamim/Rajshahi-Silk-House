import { contact } from "@/data/content";

export function bulkHref() {
  if (contact.whatsapp) return `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`;
  if (contact.phone) return `tel:${contact.phone.replace(/\s/g, "")}`;
  if (contact.email) return `mailto:${contact.email}?subject=Bulk%20Order%20Inquiry`;
  return "#contact";
}
