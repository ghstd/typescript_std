var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { spawn } from 'child_process';
import { CommandExecutor } from '../../core/executor/command.executor';
import { FileService } from '../../core/files/file.service';
import { StreamHandler } from '../../core/handlers/stream.handler';
import { PromptService } from '../../core/prompt/prompt.service';
import { FfmpegBuilder } from './ffmpeg.builder';
export class FfmpegExecutor extends CommandExecutor {
    constructor(logger) {
        super(logger);
        this.fileService = new FileService();
        this.promptService = new PromptService();
    }
    prompt() {
        return __awaiter(this, void 0, void 0, function* () {
            const width = yield this.promptService.input('width', 'number');
            const height = yield this.promptService.input('height', 'number');
            const path = yield this.promptService.input('path', 'input');
            const name = yield this.promptService.input('name', 'input');
            return { width, height, path, name };
        });
    }
    build({ width, height, path, name }) {
        const output = this.fileService.getFilePath(path, name, 'mp4');
        const args = (new FfmpegBuilder)
            .input(path)
            .setVideoSize(width, height)
            .output(output);
        return { command: 'ffmpeg', args, output };
    }
    spawn({ command, args, output }) {
        this.fileService.deleteFileIfExists(output);
        return spawn(command, args);
    }
    processStream(stream, logger) {
        const handler = new StreamHandler(logger);
        handler.processOutput(stream);
    }
}
