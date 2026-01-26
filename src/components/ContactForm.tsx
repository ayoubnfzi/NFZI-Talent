"use client";

import { useState } from "react";

type SubmitStatus = "idle" | "sending" | "success" | "error";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

export default function ContactForm() {
  const defaultEndpoint = "https://formspree.io/f/mdageygv";
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT ?? defaultEndpoint;

  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);

    setStatus("sending");

    try {
      const formData = new FormData();
      formData.set("name", values.name);
      formData.set("company", values.company);
      formData.set("email", values.email);
      formData.set("phone", values.phone);
      formData.set("message", values.message);
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

  const fieldClassName =
    "h-11 w-full border-b border-zinc-300 bg-transparent px-0 text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-blue-950 disabled:cursor-not-allowed disabled:opacity-60";

  const textareaClassName =
    "w-full resize-none border-b border-zinc-300 bg-transparent px-0 py-3 text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-blue-950 disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-3">
          <span className="text-sm font-medium text-zinc-900">Nom *</span>
          <input
            className={fieldClassName}
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Votre nom"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            disabled={isDisabled}
          />
        </label>

        <label className="space-y-3">
          <span className="text-sm font-medium text-zinc-900">Entreprise *</span>
          <input
            className={fieldClassName}
            name="company"
            type="text"
            required
            autoComplete="organization"
            placeholder="Nom de votre entreprise"
            value={values.company}
            onChange={(e) => setValues({ ...values, company: e.target.value })}
            disabled={isDisabled}
          />
        </label>

        <label className="space-y-3">
          <span className="text-sm font-medium text-zinc-900">Email *</span>
          <input
            className={fieldClassName}
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            placeholder="email@entreprise.com"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            disabled={isDisabled}
          />
        </label>

        <label className="space-y-3">
          <span className="text-sm font-medium text-zinc-900">Téléphone</span>
          <input
            className={fieldClassName}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="Optionnel"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            disabled={isDisabled}
          />
        </label>

        <label className="space-y-3 sm:col-span-2">
          <span className="text-sm font-medium text-zinc-900">Message *</span>
          <textarea
            className={textareaClassName}
            name="message"
            required
            rows={5}
            placeholder="Décrivez votre besoin (poste, contexte, délai, localisation, type de contrat…)"
            value={values.message}
            onChange={(e) => setValues({ ...values, message: e.target.value })}
            disabled={isDisabled}
          />
        </label>
      </div>

      <div className="space-y-2">
        <p className="text-sm leading-6 text-zinc-600">
          En soumettant ce formulaire, vous acceptez que vos informations soient
          utilisées uniquement pour vous recontacter au sujet de votre demande.
          Aucune donnée n’est stockée sur ce site.
        </p>
      </div>

      <div className="flex flex-col items-stretch gap-3">
        <button
          type="submit"
          disabled={isDisabled}
          className="mx-auto inline-flex h-11 w-full max-w-sm items-center justify-center rounded-md bg-blue-950 px-8 text-sm font-semibold text-white transition hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Envoi en cours…" : "Envoyer"}
        </button>

        {status === "success" ? (
          <p className="text-center text-sm font-medium text-zinc-900">
            Merci. Votre demande a bien été envoyée.
          </p>
        ) : null}

        {status === "error" ? (
          <p className="text-center text-sm font-medium text-red-700">
            {errorMessage ?? "Une erreur est survenue."}
          </p>
        ) : null}
      </div>
    </form>
  );
}
