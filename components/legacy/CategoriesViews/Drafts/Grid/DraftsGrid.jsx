// -----------------------------------------------------------------------------
import React from "react";
// -----------------------------------------------------------------------------
import NET from "@/app/NET.js";
import ToastUtils from "@/utils/Toast";
import { PageUrls, usePageRouter } from "@/utils/PageUtils.js";
// -----------------------------------------------------------------------------
import MoodboardGrid from "@/components/legacy/Moodboard/Grid/MoodboardGrid";
import MoodboardService from "@/services/MoodboardService";
import Endpoints from "@/divas-shared/shared/API/Endpoints.js";

// -----------------------------------------------------------------------------
function DraftsGrid({ userModel }) {
  //
  const { NavigateTo } = usePageRouter();

  //
  const _FetchMoodboards = async (userModel, setMoodboardsFunc) => {
    const result = await MoodboardService.GetAllDraftsByUser(userModel._id);
    if (result.IsError()) {
      ToastUtils.ResultError(result);
      return;
    }

    setMoodboardsFunc(result.value);
  };

  const _HandleOnClick = (href, event, moodboardModel) => {
    const url = NET.Make_Navigation_Url(
      PageUrls.MoodboardEdit,
      moodboardModel._id
    );
    NavigateTo(url);
  };

  // ---------------------------------------------------------------------------
  return (
    <>
      <MoodboardGrid
        userModel={userModel}
        fetchMoodboardsFunc={_FetchMoodboards}
        onClick={_HandleOnClick}
      />
    </>
  );
}

// -----------------------------------------------------------------------------
export default DraftsGrid;
