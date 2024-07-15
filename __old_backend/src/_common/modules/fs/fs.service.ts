import ServicesInjector, { AllServices } from "@services_injector";

import FSFile from "./features/fs-file.service";
import FSFolder from "./features/fs-folder.service";

class FS extends ServicesInjector {

    public readonly files: FSFile;
    public readonly folders: FSFolder;

    constructor(S: AllServices) {
        super(S);
        this.files = new FSFile(S);
        this.folders = new FSFolder(S);
    }

}

export default FS;