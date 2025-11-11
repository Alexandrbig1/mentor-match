import {
  MentorItemCoreValuesWrapper,
  MentorListItem,
} from "./MentorsComponent.styled";

export default function MentorsItem({ mentor }) {
  return (
    <MentorListItem>
      <h3>{mentor.name}</h3>
      <p>{mentor.position}</p>
      <p>{mentor.description}</p>
      <p>{mentor.location}</p>
      <p>{mentor.phone}</p>
      <p>{mentor.email}</p>
      <MentorItemCoreValuesWrapper>
        <p>Core Values:</p>
        {mentor.coreValues.map((value, index) => (
          <p key={`${index}-${value}`}>{value}</p>
        ))}
      </MentorItemCoreValuesWrapper>
      <MentorItemCoreValuesWrapper>
        <p>Technologies:</p>
        {mentor.technologies.map((technology, index) => (
          <p key={`${index}-${technology}`}>{technology}</p>
        ))}
      </MentorItemCoreValuesWrapper>
      <div>
        {mentor.socialLinks.map((link, index) => (
          <a
            key={`${index}-${link.platform}`}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.platform}
          </a>
        ))}
      </div>
    </MentorListItem>
  );
}
