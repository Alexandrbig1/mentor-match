import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/authSlice";
import { useNavigate, Link } from "react-router-dom";
import {
  PageWrapper,
  Card,
  Title,
  Subtitle,
  Field,
  Label,
  Input,
  Actions,
  SubmitButton,
  SmallText,
  LinkInline,
  ErrorText,
  FormTitleWrapper
} from "./Register.styled";

const Register: React.FC = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError("Name is required.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      await dispatch(register({ name: name.trim(), email, password })).unwrap();
      navigate("/become-a-mentor", { replace: true });
    } catch (err: any) {
      setError(err?.message || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <Card onSubmit={handleSubmit}>
        <FormTitleWrapper>
          <Title>Create account</Title>
          <Subtitle>
            Sign up to become a mentor and connect with mentees.
          </Subtitle>
        </FormTitleWrapper>

        {error && <ErrorText>{error}</ErrorText>}

        <Field>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Field>

        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Field>

        <Field>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Field>

        <Actions>
          <SubmitButton type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create account"}
          </SubmitButton>
        </Actions>

        <SmallText>
          Already have an account? <LinkInline to="/login">Sign in</LinkInline>
        </SmallText>
      </Card>
    </PageWrapper>
  );
};

export default Register;
