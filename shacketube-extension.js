(function(Scratch) {
  'use strict';

  class ShackeTubeExtension {
    getInfo() {
      return {
        id: 'shacketube',
        name: 'ShackeTube',
        color1: '#ff3366',
        color2: '#ff6699',
        blocks: [
          {
            opcode: 'downloadVideo',
            blockType: Scratch.BlockType.COMMAND,
            text: 'скачать видео по ссылке [URL]',
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://example.com/video.mp4'
              }
            }
          },
          {
            opcode: 'setVideo',
            blockType: Scratch.BlockType.COMMAND,
            text: 'установить видео [URL]',
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://example.com/video.mp4'
              }
            }
          }
        ]
      };
    }

    downloadVideo(args) {
      const a = document.createElement('a');
      a.href = args.URL;
      a.download = '';
      a.click();
    }

    setVideo(args) {
      console.log(`Видео установлено: ${args.URL}`);
      alert('Видео установлено! (но пока без проигрывания 😅)');
    }
  }

  Scratch.extensions.register(new ShackeTubeExtension());
})(Scratch);
