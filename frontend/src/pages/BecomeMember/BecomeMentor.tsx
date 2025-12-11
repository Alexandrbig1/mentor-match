import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
  CardForm,
  Title,
  Subtitle,
  Field,
  Label,
  Input,
  Textarea,
  Row,
  Chips,
  Chip,
  ChipInput,
  AddButton,
  SocialList,
  SocialItem,
  SmallInput,
  RemoveButton,
  Actions,
  SubmitButton,
  ErrorText,
  SuccessText,
  CardWrapper,
  TitleWrapper,
  FieldWrapper,
} from "./BecomeMentor.styled";

type SocialLink = { platform: string; url: string };

const BecomeAMentor: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [techInput, setTechInput] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([
    { platform: "", url: "" },
  ]);
  const [coreValues, setCoreValues] = useState<string[]>([]);
  const [coreInput, setCoreInput] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const addTechnology = () => {
    const v = techInput.trim();
    if (v && !technologies.includes(v)) {
      setTechnologies((s) => [...s, v]);
    }
    setTechInput("");
  };

  const removeTechnology = (t: string) =>
    setTechnologies((s) => s.filter((x) => x !== t));

  const addCoreValue = () => {
    const v = coreInput.trim();
    if (v && !coreValues.includes(v)) {
      setCoreValues((s) => [...s, v]);
    }
    setCoreInput("");
  };

  const removeCoreValue = (v: string) =>
    setCoreValues((s) => s.filter((x) => x !== v));

  const updateSocial = (
    index: number,
    field: "platform" | "url",
    val: string
  ) =>
    setSocialLinks((s) =>
      s.map((sl, i) => (i === index ? { ...sl, [field]: val } : sl))
    );

  const addSocial = () =>
    setSocialLinks((s) => [...s, { platform: "", url: "" }]);

  const removeSocial = (index: number) =>
    setSocialLinks((s) => s.filter((_, i) => i !== index));

  const validate = () => {
    if (!name.trim()) {
      setError("Name is required.");
      return false;
    }

    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Email is invalid.");
      return false;
    }

    if (socialLinks.some((sl) => sl.url && !/^https?:\/\//.test(sl.url))) {
      setError("Social link URLs must include protocol (https://).");
      return false;
    }
    
    setError(null);
    return true;
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setError(null);
    setSuccess(null);

     // Build payload
    const payload = {
      name: name.trim(),
      position: position.trim() || null,
      technologies,
      phone: phone.trim() || null,
      email: email.trim() || null,
      location: location.trim() || null,
      socialLinks: socialLinks
        .map((s) => ({
          platform: s.platform.trim() || undefined,
          url: s.url.trim() || undefined,
        }))
        .filter((s) => s.platform && s.url),
      coreValues,
      description: description.trim() || null,
    };

    try {
      // Detect API endpoint: prefer env var, fallback to /api/mentors
      const base =
        (import.meta.env as Record<string, string | undefined>)
          .VITE_CREATE_MENTOR ||
        (import.meta.env as Record<string, string | undefined>).VITE_API_BASE ||
        "/api/mentors";

      const url = base.toString().endsWith("/api/mentors")
        ? base.toString()
        : `${base.toString().replace(/\/$/, "")}/api/mentors`;

      const token =
        localStorage.getItem("token") ||
        localStorage.getItem("authToken") ||
        "";

      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const res = await axios.post(url, payload, { headers });

      setSuccess("Application submitted. Your profile is created.");
      // optionally navigate to mentor profile page, change path as needed:
      setTimeout(() => {
        navigate("/mentors"); // or navigate to newly created mentor page if response has id
      }, 900);
    } catch (err: any) {
      console.error("Submit error:", err);
      setError(err?.response?.data?.message || "Failed to submit. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <CardWrapper>
        <CardForm onSubmit={handleSubmit}>
          <TitleWrapper>
            <Title>Become a mentor</Title>
            <Subtitle>
              Tell us about your background so mentees can find you.
            </Subtitle>
          </TitleWrapper>

          {error && <ErrorText>{error}</ErrorText>}
          {success && <SuccessText>{success}</SuccessText>}

          <FieldWrapper>
            <Field>
              <Label>Name</Label>
              <Input
                placeholder="Your full name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Field>

            <Field>
              <Label>Position</Label>
              <Input
                placeholder="e.g. Senior Developer at XYZ"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </Field>

            <Field>
              <Label>Technologies</Label>
              <Row>
                <ChipInput
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  placeholder="Add technology and press Add"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addTechnology();
                    }
                  }}
                />
                <AddButton type="button" onClick={addTechnology}>
                  Add
                </AddButton>
              </Row>
              <Chips>
                {technologies.map((t) => (
                  <Chip key={t}>
                    {t}
                    <RemoveButton
                      type="button"
                      onClick={() => removeTechnology(t)}
                    >
                      ×
                    </RemoveButton>
                  </Chip>
                ))}
              </Chips>
            </Field>

            <Field>
              <Label>Phone</Label>
              <Input
                type="tel"
                placeholder="e.g. +1 234 567 8900"              
                value={phone} onChange={(e) => setPhone(e.target.value)} />
            </Field>

            <Field>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="e.g. mentor@example.com"
                value={email} onChange={(e) => setEmail(e.target.value)} />
            </Field>

            <Field>
              <Label>Location</Label>
              <Input
                placeholder="e.g. San Francisco, CA"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Field>

            <Field>
              <Label>Social links</Label>
              <SocialList>
                {socialLinks.map((s, i) => (
                  <SocialItem key={i}>
                    <SmallInput
                      placeholder="Platform (e.g. Twitter)"
                      value={s.platform}
                      onChange={(e) =>
                        updateSocial(i, "platform", e.target.value)
                      }
                    />
                    <SmallInput
                      placeholder="https://..."
                      value={s.url}
                      onChange={(e) => updateSocial(i, "url", e.target.value)}
                    />
                    <RemoveButton type="button" onClick={() => removeSocial(i)}>
                      Remove
                    </RemoveButton>
                  </SocialItem>
                ))}
                <AddButton type="button" onClick={addSocial}>
                  Add social
                </AddButton>
              </SocialList>
            </Field>

            <Field>
              <Label>Core values</Label>
              <Row>
                <ChipInput
                  value={coreInput}
                  onChange={(e) => setCoreInput(e.target.value)}
                  placeholder="Add a core value and press Add"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addCoreValue();
                    }
                  }}
                />
                <AddButton type="button" onClick={addCoreValue}>
                  Add
                </AddButton>
              </Row>
              <Chips>
                {coreValues.map((c) => (
                  <Chip key={c}>
                    {c}
                    <RemoveButton
                      type="button"
                      onClick={() => removeCoreValue(c)}
                    >
                      ×
                    </RemoveButton>
                  </Chip>
                ))}
              </Chips>
            </Field>

            <Field>
              <Label>Description</Label>
              <Textarea
                placeholder="Tell us about your mentoring style, experience, etc."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={6}
              />
            </Field>
          </FieldWrapper>

          <Actions>
            <SubmitButton type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Become a mentor"}
            </SubmitButton>
          </Actions>
        </CardForm>
      </CardWrapper>
    </PageWrapper>
  );
};

export default BecomeAMentor;
