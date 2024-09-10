import { AllServices, Auto, AutoInstance } from "@services_injector";

import FSFile from "./features/fs-file.service";
import FSFolder from "./features/fs-folder.service";

@AutoInstance
class FS {
    @Auto public file: FSFile;
    @Auto public folder: FSFolder;

}

export default FS;