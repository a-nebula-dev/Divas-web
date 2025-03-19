// -----------------------------------------------------------------------------
import { StatusCodes } from "http-status-codes";
// -----------------------------------------------------------------------------
import NET from "@/app/NET";
import Result from "@/app/Result";
// -----------------------------------------------------------------------------
import Assert from "@/utils/Assert";
import MoodboardItemsController from "@/controllers/Moodboard/MoodboardItemsController"
// -----------------------------------------------------------------------------
import Endpoints from "@/divas-shared/shared/API/Endpoints";
import CachedImageController from "@/controllers/CachedImage/CachedImageController";

// -----------------------------------------------------------------------------
class App
{
  //
  // Cached Images
  //

  // ---------------------------------------------------------------------------
  static GetCachedImageForUrl(url, onLoadCallback)
  {
    Assert.NotNull(url);

    // Lazy load the controller.
    if(!App._cachedImagesController) {
      App._cachedImagesController = new CachedImageController();
    }

    return App._cachedImagesController.GetCachedImageForUrl(url, onLoadCallback);
  }
};


// -----------------------------------------------------------------------------
export default App;