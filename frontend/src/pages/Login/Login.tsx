import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import { useNavigate, useLocation, Link } from "react-router-dom";
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
  FormTitleWrapper,
} from "./Login.styled";

const Login: React.FC = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || "/become-a-mentor";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await dispatch(login({ email, password })).unwrap();
      navigate(from, { replace: true });
    } catch (err: any) {
      console.error(err);
      setError(
        err?.message || "Login failed. Check credentials and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <Card onSubmit={handleSubmit}>
        <FormTitleWrapper>
          <Title>Sign in</Title>
          <Subtitle>
            Welcome back — sign in to continue to Mentor Match.
          </Subtitle>
        </FormTitleWrapper>

        {error && <ErrorText>{error}</ErrorText>}

        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
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
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Field>

        <Actions>
          <SubmitButton type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </SubmitButton>
        </Actions>

        <SmallText>
          Don't have an account? <LinkInline to="/register">Sign Up</LinkInline>
        </SmallText>
      </Card>
    </PageWrapper>
  );
};

export default Login;
