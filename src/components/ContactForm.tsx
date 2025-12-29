"use client";

import { useState } from "react";

type SubmitStatus = "idle" | "sending" | "success" | "error";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
};

const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
};

export default function ContactForm() {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);

    if (!endpoint) {
      setStatus("error");
      setErrorMessage(
        "Le formulaire n’est pas configuré. Veuillez réessayer plus tard."
      );
      return;
    }

    setStatus("sending");

    try {
      const formData = new FormData();
      formData.set("name", values.name);
      formData.set("company", values.company);
      formData.set("email", values.email);
      formData.set("phone", values.phone);
      formData.set("source", "nfzi-talent-one-page");

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          "L’envoi a échoué. Merci de vérifier vos informations et de réessayer."
        );
        return;
      }

      setStatus("success");
      setValues(INITIAL_VALUES);
    } catch {
      setStatus("error");
      setErrorMessage(
        "Une erreur réseau est survenue. Merci de réessayer dans un instant."
      );
    }
  }

  const isDisabled = status === "sending";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-zinc-900">
            Nom <span className="text-zinc-500">*</span>
          </span>
          <input
            className="h-11 w-full rounded-lg border border-zinc-200 bg-white px-4 text-zinc-950 outline-none transition focus:border-blue-950/30 focus:ring-4 focus:ring-blue-950/10"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            disabled={isDisabled}
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-zinc-900">
            Entreprise <span className="text-zinc-500">*</span>
          </span>
          <input
            className="h-11 w-full rounded-lg border border-zinc-200 bg-white px-4 text-zinc-950 outline-none transition focus:border-blue-950/30 focus:ring-4 focus:ring-blue-950/10"
            name="company"
            type="text"
            required
            autoComplete="organization"
            value={values.company}
            onChange={(e) => setValues({ ...values, company: e.target.value })}
            disabled={isDisabled}
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-zinc-900">
            Email professionnel <span className="text-zinc-500">*</span>
          </span>
          <input
            className="h-11 w-full rounded-lg border border-zinc-200 bg-white px-4 text-zinc-950 outline-none transition focus:border-blue-950/30 focus:ring-4 focus:ring-blue-950/10"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            disabled={isDisabled}
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-zinc-900">
            Numéro de téléphone <span className="text-zinc-500">*</span>
          </span>
          <input
            className="h-11 w-full rounded-lg border border-zinc-200 bg-white px-4 text-zinc-950 outline-none transition focus:border-blue-950/30 focus:ring-4 focus:ring-blue-950/10"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            disabled={isDisabled}
          />
        </label>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-zinc-600">
          En soumettant ce formulaire, vous acceptez que vos informations soient
          utilisées uniquement pour vous recontacter au sujet de votre demande.
          Aucune donnée n’est stockée sur ce site.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isDisabled}
          className="inline-flex h-11 items-center justify-center rounded-lg bg-blue-950 px-6 text-sm font-semibold text-white transition hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
        </button>

        {status === "success" ? (
          <p className="text-sm font-medium text-zinc-900">
            Merci. Votre demande a bien été envoyée.
          </p>
        ) : null}

        {status === "error" ? (
          <p className="text-sm font-medium text-red-700">
            {errorMessage ?? "Une erreur est survenue."}
          </p>
        ) : null}
      </div>
    </form>
  );
}
