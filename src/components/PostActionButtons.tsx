import React from "react";
import { Box, IconButton, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useDeletePostMutation, useMeQuery } from "../generated/graphql";
import { useRouter } from "next/router";

interface PostActionButtonsProps {
  id: number;
  creatorId: number;
}

const PostActionButtons: React.FC<PostActionButtonsProps> = ({
  id,
  creatorId,
}) => {
  const router = useRouter();
  const [{ data: meData }] = useMeQuery();
  const [, deletePost] = useDeletePostMutation();

  if (meData?.me?.id !== creatorId) {
    return null;
  }

  const pathname = window.location.pathname;

  const containsPage = pathname.includes("page");

  return (
    <Box>
      <NextLink href="/post/edit/[id]" as={`/post/edit/${id}`}>
        <IconButton
          as={Link}
          mr={4}
          icon={<EditIcon />}
          aria-label="Edit Post"
          size={"sm"}
        />
      </NextLink>
      <IconButton
        icon={<DeleteIcon />}
        aria-label="Delete Post"
        onClick={() => {
          deletePost({ id });
          setTimeout(() => {
            if (containsPage) {
              router.push("/");
            }
          }, 1000);
        }}
        size={"sm"}
      />
    </Box>
  );
};

export default PostActionButtons;
