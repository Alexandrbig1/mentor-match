import {
  MentorItemAvatarImage,
  MentorItemAvatarNameWrapper,
  MentorItemAvatarWrapper,
  MentorItemContentWrapper,
  MentorItemCoreValuesWrapper,
  MentorItemDescription,
  MentorItemDetails,
  MentorItemNameWrapper,
  MentorItemSocialIconsWrapper,
  MentorItemTypesItems,
  MentorItemTypesWrapper,
  MentorListItem,
} from "./MentorsComponent.styled";

export default function MentorsItem({ mentor }) {
  return (
    <MentorListItem>
      <MentorItemAvatarNameWrapper>
        <MentorItemAvatarWrapper>
          <MentorItemAvatarImage
            src={mentor.avatar || "/images/default-mentor.jpg"}
            alt={mentor.name}
          />
        </MentorItemAvatarWrapper>
        <MentorItemNameWrapper>
          <div>
            <h3>{mentor.name}</h3>
            <p>{mentor.position}</p>
          </div>
          <div>
            <MentorItemDetails>{mentor.location}</MentorItemDetails>
            <a
              href={`tel:${mentor.phone}`}
              aria-label={`Call ${mentor.name}`}
              title={`Call ${mentor.name}`}
            >
              <MentorItemDetails>{mentor.phone}</MentorItemDetails>
            </a>
            <a
              href={`mailto:${mentor.email}`}
              aria-label={`Email ${mentor.name}`}
              title={`Email ${mentor.name}`}
            >
              <MentorItemDetails>{mentor.email}</MentorItemDetails>
            </a>
          </div>
        </MentorItemNameWrapper>
      </MentorItemAvatarNameWrapper>
      <MentorItemContentWrapper>
        <MentorItemDescription>{mentor.description}</MentorItemDescription>
        <MentorItemCoreValuesWrapper>
          <MentorItemTypesWrapper>
            <p>Core Values:</p>
            {mentor.coreValues.map((value, index) => (
              <MentorItemTypesItems key={`${index}-${value}`}>
                <span></span>
                <p>
                  {value}
                </p>
              </MentorItemTypesItems>
            ))}
          </MentorItemTypesWrapper>
        </MentorItemCoreValuesWrapper>
        <MentorItemCoreValuesWrapper>
          <MentorItemTypesWrapper>
            <p>Technologies:</p>
            {mentor.technologies.map((technology, index) => (
              <MentorItemTypesItems key={`${index}-${technology}`}>
                <span></span>
                <p>
                  {technology}
                </p>
              </MentorItemTypesItems>
            ))}
          </MentorItemTypesWrapper>
        </MentorItemCoreValuesWrapper>
        <MentorItemSocialIconsWrapper>
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
        </MentorItemSocialIconsWrapper>
      </MentorItemContentWrapper>
    </MentorListItem>
  );
}
