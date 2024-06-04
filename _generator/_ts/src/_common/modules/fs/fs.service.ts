import { AllServices, Auto, Instantiate } from "@services_injector";

import FSFile from "./features/fs-file.service";
import FSFolder from "./features/fs-folder.service";

@Instantiate
class FS {

    @Auto public file: FSFile;
    @Auto public folder: FSFolder;


    _initial = (S: AllServices) => { }
}

export default FS;