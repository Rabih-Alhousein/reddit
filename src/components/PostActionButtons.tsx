import { EditIcon } from "@chakra-ui/icons";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import { IoArrowRedoOutline, IoBookmarkOutline } from "react-icons/io5";
import { useDeletePostMutation, useMeQuery } from "../generated/graphql";

interface PostActionButtonsProps {
  postId: number;
  creatorId: number;
}

const PostActionButtons: React.FC<PostActionButtonsProps> = ({
  postId,
  creatorId,
}) => {
  const router = useRouter();
  const [{ data: meData }] = useMeQuery();
  const [, deletePost] = useDeletePostMutation();

  const userIsCreator = meData?.me?.id === creatorId;

  const pathname = window.location.pathname;

  const containsPage = pathname.includes("page");

  return (
    <Flex
      ml={1}
      mb={0.5}
      color="gray.500"
      fontWeight={600}
      wrap={"wrap"}
      gap={3}
    >
      <Flex
        align="center"
        borderRadius={4}
        _hover={{ bg: "gray.200" }}
        cursor="pointer"
      >
        <Icon as={BsChat} mr={2} />
        <Text fontSize="9pt">3</Text>
      </Flex>
      <Flex
        align="center"
        borderRadius={4}
        _hover={{ bg: "gray.200" }}
        cursor="pointer"
      >
        <Icon as={IoArrowRedoOutline} mr={2} />
        <Text fontSize="9pt">Share</Text>
      </Flex>
      <Flex
        align="center"
        borderRadius={4}
        _hover={{ bg: "gray.200" }}
        cursor="pointer"
      >
        <Icon as={IoBookmarkOutline} mr={2} />
        <Text fontSize="9pt">Save</Text>
      </Flex>

      {userIsCreator && (
        <>
          <Flex
            align="center"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
            onClick={() => {
              router.push(`/post/edit/${postId}`);
            }}
          >
            <Icon as={EditIcon} mr={2} />
            <Text fontSize="9pt">Edit</Text>
          </Flex>
          <Flex
            align="center"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
            onClick={() => {
              deletePost({ id: postId });
              setTimeout(() => {
                if (containsPage) {
                  router.push("/");
                }
              }, 1000);
            }}
          >
            <Icon as={AiOutlineDelete} mr={2} />
            <Text fontSize="9pt">Delete</Text>
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default PostActionButtons;
