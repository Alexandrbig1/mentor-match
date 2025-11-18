import { getTechIconProps } from "../../../utils/getTechIconProps";
import MentorSocialIcons from "../../../components/UI/MentorSocialIcons/MentorSocialIcons";
import {
  MentorItemAvatarImage,
  MentorItemAvatarNameWrapper,
  MentorItemAvatarWrapper,
  MentorItemContentWrapper,
  MentorItemCoreValuesWrapper,
  MentorItemDescription,
  MentorItemDetails,
  MentorItemDetailsContact,
  MentorItemDetailsContactWrapper,
  MentorItemName,
  MentorItemNameWrapper,
  MentorItemPosition,
  MentorItemSocialIconsWrapper,
  MentorItemTechnologyIconWrapper,
  MentorItemTechnologyText,
  MentorItemTechnologyWrapper,
  MentorItemValuesItemsWrapper,
  MentorItemTypesItemsSubTitle,
  MentorItemTypesWrapper,
  MentorListItem,
  MentorItemValuesText,
} from "./MentorsComponent.styled";

/* local Mentor type matching usage in component */
type SocialLink = { platform: string; url: string };
type Mentor = {
  _id?: string;
  avatar?: string | null;
  name: string;
  position?: string | null;
  location?: string | null;
  phone?: string | null;
  email?: string | null;
  description?: string | null;
  coreValues: string[];
  technologies: string[];
  socialLinks: SocialLink[];
};

export default function MentorsItem({ mentor }: { mentor: Mentor }) {
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
            <MentorItemName>{mentor.name}</MentorItemName>
            <MentorItemPosition>{mentor.position}</MentorItemPosition>
          </div>
          <MentorItemDetailsContactWrapper>
            <MentorItemDetails>{mentor.location}</MentorItemDetails>
            <a
              href={`tel:${mentor.phone}`}
              aria-label={`Call ${mentor.name}`}
              title={`Call ${mentor.name}`}
            >
              <MentorItemDetailsContact>
                {mentor.phone}
              </MentorItemDetailsContact>
            </a>
            <a
              href={`mailto:${mentor.email}`}
              aria-label={`Email ${mentor.name}`}
              title={`Email ${mentor.name}`}
            >
              <MentorItemDetailsContact>
                {mentor.email}
              </MentorItemDetailsContact>
            </a>
          </MentorItemDetailsContactWrapper>
        </MentorItemNameWrapper>
      </MentorItemAvatarNameWrapper>
      <MentorItemContentWrapper>
        <MentorItemDescription>{mentor.description}</MentorItemDescription>
        <MentorItemCoreValuesWrapper>
          <MentorItemTypesWrapper>
            <MentorItemTypesItemsSubTitle>
              Core Values:
            </MentorItemTypesItemsSubTitle>
            {mentor.coreValues.map((value, index) => (
              <MentorItemValuesItemsWrapper key={`${index}-${value}`}>
                <MentorItemValuesText>{value}</MentorItemValuesText>
              </MentorItemValuesItemsWrapper>
            ))}
          </MentorItemTypesWrapper>
        </MentorItemCoreValuesWrapper>
        <MentorItemCoreValuesWrapper>
          <MentorItemTypesWrapper>
            <MentorItemTypesItemsSubTitle>
              Technologies:
            </MentorItemTypesItemsSubTitle>
            {mentor.technologies.map((technology, index) => {
              const { IconComponent, color, hoverColor } =
                getTechIconProps(technology);
              return (
                <MentorItemTechnologyWrapper
                  key={`${index}-${technology}`}
                  $color={color}
                  $hoverColor={hoverColor}
                >
                  <MentorItemTechnologyIconWrapper $color={color}>
                    <IconComponent />
                  </MentorItemTechnologyIconWrapper>
                  <MentorItemTechnologyText>{technology}</MentorItemTechnologyText>
                </MentorItemTechnologyWrapper>
              );
            })}
          </MentorItemTypesWrapper>
        </MentorItemCoreValuesWrapper>
        <MentorItemSocialIconsWrapper>
          <MentorSocialIcons socialLinks={mentor.socialLinks} />
        </MentorItemSocialIconsWrapper>
      </MentorItemContentWrapper>
    </MentorListItem>
  );
}
