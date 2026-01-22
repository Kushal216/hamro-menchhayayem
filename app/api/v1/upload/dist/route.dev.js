'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.POST = POST;

var _server = require('next/server');

var _cloudinery = require('@/lib/cloudinary.js');

function POST(req) {
  var formData, file, uploadResult;
  return regeneratorRuntime.async(
    function POST$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(req.formData());

          case 3:
            formData = _context.sent;
            file = formData.get('image');

            if (file) {
              _context.next = 7;
              break;
            }

            return _context.abrupt(
              'return',
              _server.NextResponse.json(
                {
                  error: 'No image provided',
                },
                {
                  status: 400,
                }
              )
            );

          case 7:
            _context.next = 9;
            return regeneratorRuntime.awrap(
              (0, _cloudinery.uploadToCloudinary)(file)
            );

          case 9:
            uploadResult = _context.sent;
            return _context.abrupt(
              'return',
              _server.NextResponse.json({
                message: 'Image Uploaded Successfully',
                url: uploadResult.secure_url,
                public_id: uploadResult.public_id,
              })
            );

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](0);
            return _context.abrupt(
              'return',
              _server.NextResponse.json(
                {
                  error: _context.t0.message,
                },
                {
                  status: 500,
                }
              )
            );

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    },
    null,
    null,
    [[0, 13]]
  );
}
