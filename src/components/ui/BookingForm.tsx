import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from './Button';

interface BookingFormProps {
  bookingType: string;
  itemName?: string;
  price?: number;
  onClose?: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ bookingType, itemName, price, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    checkInDate: '',
    checkOutDate: '',
    guests: '2',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = '919205402295';

    let message = `*New ${bookingType} Booking Request*%0A%0A`;
    message += `*Name:* ${formData.name}%0A`;
    message += `*Phone:* ${formData.phone}%0A`;

    if (itemName) {
      message += `*${bookingType}:* ${itemName}%0A`;
    }

    if (price) {
      message += `*Price:* ₹${price.toLocaleString()}%0A`;
    }

    message += `*Check-in:* ${formData.checkInDate}%0A`;
    message += `*Check-out:* ${formData.checkOutDate}%0A`;
    message += `*Number of Guests:* ${formData.guests}%0A`;

    if (formData.message) {
      message += `*Additional Message:* ${formData.message}%0A`;
    }

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');

    if (onClose) {
      onClose();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-[#8B1538] mb-2">Full Name *</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#8B1538] mb-2">Phone Number *</label>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
          placeholder="+91 98765 43210"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-[#8B1538] mb-2">Check-in Date *</label>
          <input
            type="date"
            name="checkInDate"
            required
            value={formData.checkInDate}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#8B1538] mb-2">Check-out Date *</label>
          <input
            type="date"
            name="checkOutDate"
            required
            value={formData.checkOutDate}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
            min={formData.checkInDate || new Date().toISOString().split('T')[0]}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#8B1538] mb-2">Number of Guests *</label>
        <select
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent appearance-none"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
            <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#8B1538] mb-2">Additional Message</label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent resize-none"
          placeholder="Any special requests or questions..."
        />
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> Clicking submit will open WhatsApp with your booking details.
          Our team will confirm availability and complete your reservation.
        </p>
      </div>

      <Button type="submit" variant="primary" className="w-full py-3">
        <Send className="mr-2" size={18} />
        Send Booking via WhatsApp
      </Button>
    </form>
  );
};

export { BookingForm };
