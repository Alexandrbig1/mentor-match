import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaPen } from "react-icons/fa6";
import { selectUser } from "../../redux/authSelectors";
import {
  PageWrapper,
  Card,
  Header,
  Avatar,
  Title,
  Subtitle,
  Body,
  InfoRow,
  Label,
  Value,
  EditButton,
  Input,
  Actions,
  ActionButton,
  Note,
} from "./UserProfile.styled";

export default function UserProfile() {
  const user = useSelector(selectUser);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
  }, [user]);

  const handleSave = () => {
    // Not functional yet — UI only.
    setEditing(false);
    setNotice("Changes are local only (save not implemented).");
    setTimeout(() => setNotice(null), 3000);
  };

  const handleCancel = () => {
    setEditing(false);
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
  };

  const initials = (user?.name || user?.email || "U")
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <PageWrapper>
      <Card>
        <Header>
          <Avatar aria-hidden>{initials}</Avatar>
          <div>
            <Title>{user?.name ?? "User"}</Title>
            <Subtitle>Account information</Subtitle>
          </div>
          <EditButton
            aria-pressed={editing}
            aria-label={editing ? "Close editor" : "Edit profile"}
            onClick={() => setEditing((s) => !s)}
          >
            <FaPen />
          </EditButton>
        </Header>

        <Body>
          <InfoRow>
            <Label>Name</Label>
            {editing ? (
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            ) : (
              <Value>{user?.name ?? "-"}</Value>
            )}
          </InfoRow>

          <InfoRow>
            <Label>Email</Label>
            {editing ? (
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            ) : (
              <Value>{user?.email ?? "-"}</Value>
            )}
          </InfoRow>

          {notice && <Note>{notice}</Note>}

          {editing && (
            <Actions>
              <ActionButton type="button" onClick={handleSave}>
                Save (UI only)
              </ActionButton>
              <ActionButton type="button" variant="ghost" onClick={handleCancel}>
                Cancel
              </ActionButton>
            </Actions>
          )}
        </Body>
      </Card>
    </PageWrapper>
  );
}