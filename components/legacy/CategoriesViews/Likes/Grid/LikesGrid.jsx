// -----------------------------------------------------------------------------
import React from "react";
import { useEffect, useState } from "react";
// -----------------------------------------------------------------------------
import ToastUtils from "@/utils/Toast";
// -----------------------------------------------------------------------------
import MoodboardGrid from "@/components/legacy/Moodboard/Grid/MoodboardGrid";
import MoodboardService from "@/services/MoodboardService";

// -----------------------------------------------------------------------------
function LikesGrid({ userModel }) {
  // ---------------------------------------------------------------------------
  const _FetchMoodboards = async (userModel, setMoodboardsFunc) => {
    const result = await MoodboardService.GetAllLikedByUser(userModel._id);
    if (result.IsError()) {
      ToastUtils.ResultError(result);
      return;
    }

    setMoodboardsFunc(result.value);
  };

  // ---------------------------------------------------------------------------
  return (
    <>
      <MoodboardGrid
        userModel={userModel}
        fetchMoodboardsFunc={_FetchMoodboards}
      />
    </>
  );
}

// -----------------------------------------------------------------------------
export default LikesGrid;
