import {
  Avatar,
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Switch,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { UpdateShelterInfo } from '@/types/apis/shetler';

import useFetchShelterAccount from './_hooks/useFetchShelterAccount';

export default function SettingsAccountPage() {
  const [imgFile, setImgFile] = useState<string>('');
  const { data } = useFetchShelterAccount();

  const { register, handleSubmit, reset, watch } = useForm<UpdateShelterInfo>();

  useEffect(() => {
    reset(data);
    setImgFile(data.imageUrl);
  }, [data]);

  const onSubmit = handleSubmit((newData) => {
    //TODO 계정정보수정 API
    console.log(newData);
  });

  const uploadImgFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const newImgFile = URL.createObjectURL(file);
      setImgFile(newImgFile);
    }
  };

  return (
    <Box px={4} pb={193}>
      <form onSubmit={onSubmit}>
        <Center py={30}>
          <FormLabel htmlFor="fileInput" cursor="pointer" fontWeight={400} />
          <Avatar
            boxSize={100}
            as="label"
            htmlFor="profileImg"
            cursor="pointer"
            src={imgFile}
          />
          <Input
            id="profileImg"
            type="file"
            accept="image/*"
            display="none"
            {...register('imageUrl', { onChange: uploadImgFile })}
          />
        </Center>

        <FormControl mb={5}>
          <FormLabel fontWeight={400}>이메일</FormLabel>
          <Input
            disabled
            bgColor="gray.100"
            color="gray.500"
            _hover={{ border: 'none' }}
            value={data.email}
          />
        </FormControl>

        <FormControl mb={5} isRequired>
          <FormLabel fontWeight={400}>보호소 이름</FormLabel>
          <Input placeholder="이름을 입력하세요" {...register('name')} />
        </FormControl>

        <FormControl mb={5} isRequired>
          <FormLabel fontWeight={400}>보호소 주소</FormLabel>
          <Input
            placeholder="보호소 주소를 입력해주세요"
            {...register('address')}
          />
        </FormControl>

        <FormControl mb={5} isRequired>
          <HStack mb={2}>
            <FormLabel m={0} fontWeight={400} w="100%">
              보호소 상세 주소
            </FormLabel>
            <FormControl as={HStack} justify="flex-end" spacing={1}>
              <FormLabel
                m={0}
                fontSize="sm"
                color="gray.500"
                pos="relative"
                top="1px"
              >
                상세주소 공개
              </FormLabel>
              <Switch
                colorScheme="orange"
                isChecked={watch('isOpenedAddress')}
                {...register('isOpenedAddress')}
              />
            </FormControl>
          </HStack>
          <Input
            placeholder="보호소 상세 주소를 입력해주세요"
            {...register('addressDetail')}
          />
        </FormControl>

        <FormControl mb={5} isRequired>
          <FormLabel fontWeight={400}>보호소 전화번호</FormLabel>
          <Input
            type="tel"
            placeholder="전화번호를 입력하세요"
            {...register('phoneNumber')}
          />
        </FormControl>

        <FormControl mb={5} isRequired>
          <FormLabel fontWeight={400}>보호소 임시 전화번호</FormLabel>
          <Input
            type="tel"
            placeholder="전화번호를 입력하세요"
            {...register('sparePhoneNumber')}
          />
        </FormControl>
        <Center>
          <Button
            type="submit"
            w="100%"
            h="44px"
            pos="absolute"
            bottom={21}
            bgColor="orange.400"
            color="white"
          >
            수정완료
          </Button>
        </Center>
      </form>
    </Box>
  );
}
