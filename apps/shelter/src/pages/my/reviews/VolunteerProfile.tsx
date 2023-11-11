import { Avatar, Box, HStack, Image, Text } from '@chakra-ui/react';
import NextIcon from 'shared/assets/icon_review_next.svg';
import InfoSubtext from 'shared/components/InfoSubtext';
import Label from 'shared/components/Label';

type VolunteerProfileprops = {
  volunteerName: string;
  volunteerTempature: number;
  volunteerReviewCount: number;
  volunteerImageUrl: string;
  reviewCreatedAt: string;
};

export default function VolunteerProfile({
  volunteerName,
  volunteerTempature,
  volunteerReviewCount,
  volunteerImageUrl,
  reviewCreatedAt,
}: VolunteerProfileprops) {
  return (
    <HStack spacing={2.5}>
      <Avatar src={volunteerImageUrl} boxSize="34px" />
      <Box>
        <HStack spacing={0}>
          <Text fontWeight="semibold" lineHeight="tall">
            {volunteerName}
          </Text>
          <Box as="button" boxSize={6} minW={6}>
            <Image src={NextIcon} w="full" h="full" />
          </Box>
          <InfoSubtext title="리뷰" content={volunteerReviewCount.toString()} />
        </HStack>
        <HStack spacing={2}>
          <Label labelTitle={`${volunteerTempature}°C`} />
          <InfoSubtext title="작성일" content={reviewCreatedAt} />
        </HStack>
      </Box>
    </HStack>
  );
}
