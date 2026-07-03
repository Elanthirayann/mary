import { useState } from "react";
import Button from "./Button";

const classes = [
  "LKG", "UKG", "Class I", "Class II", "Class III", "Class IV", "Class V",
  "Class VI", "Class VII", "Class VIII", "Class IX", "Class X",
];

export default function EnquiryForm({ title = "Send an Enquiry" }) {
  const [form, setForm] = useState({
    studentName: "",
    classApplying: "",
    parentName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    if (!form.studentName.trim()) errs.studentName = "Student name is required";
    if (!form.classApplying) errs.classApplying = "Please select a class";
    if (!form.parentName.trim()) errs.parentName = "Parent name is required";
    if (!/^[0-9+\s-]{10,15}$/.test(form.phone)) errs.phone = "Enter a valid phone number";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Enter a valid email";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // No backend wired up yet — structured for easy API integration later.
      console.log("Enquiry submitted:", form);
      setSubmitted(true);
      setForm({
        studentName: "",
        classApplying: "",
        parentName: "",
        phone: "",
        email: "",
        message: "",
      });
    }
  };

  const inputClass = (field) =>
    `w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-maroon/30 transition-colors ${
      errors[field] ? "border-red-400" : "border-gray-200"
    }`;

  return (
    <div className="bg-white rounded-2xl shadow-card p-6 md:p-8">
      <h3 className="font-heading font-bold text-xl text-maroon-dark mb-6">{title}</h3>

      {submitted && (
        <div className="mb-5 rounded-lg bg-green-50 text-green-700 text-sm px-4 py-3">
          Thank you! Your enquiry has been received. Our admission office will reach out shortly.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div>
          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            value={form.studentName}
            onChange={handleChange}
            className={inputClass("studentName")}
          />
          {errors.studentName && <p className="text-xs text-red-500 mt-1">{errors.studentName}</p>}
        </div>

        <div>
          <select
            name="classApplying"
            value={form.classApplying}
            onChange={handleChange}
            className={inputClass("classApplying")}
          >
            <option value="">Class Applying For</option>
            {classes.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.classApplying && <p className="text-xs text-red-500 mt-1">{errors.classApplying}</p>}
        </div>

        <div>
          <input
            type="text"
            name="parentName"
            placeholder="Parent / Guardian Name"
            value={form.parentName}
            onChange={handleChange}
            className={inputClass("parentName")}
          />
          {errors.parentName && <p className="text-xs text-red-500 mt-1">{errors.parentName}</p>}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className={inputClass("phone")}
            />
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className={inputClass("email")}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Message (optional)"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className={inputClass("message")}
          />
        </div>

        <Button type="submit" variant="maroon" className="w-full">
          Submit Enquiry
        </Button>
      </form>
    </div>
  );
}
