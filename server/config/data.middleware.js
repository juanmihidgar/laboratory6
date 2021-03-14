const characterMiddleware = (req, res, next) => {
  if (req.method === 'POST') {
    req.body = {
      ...req.body,
      thumbNailUrl: '/thumbnails/new-character.jpg',
    };
  }
  next();
};

module.exports = (req, res, next) => {
  if (req.path === '/characters') {
    characterMiddleware(req, res, next);
  } else {
    next();
  }
};

const episodesMiddleware = (req, res, next) => {
  if (req.method === 'POST') {
    req.body = {
      ...req.body,
      thumbNailUrl: '/thumbnails/new-character.jpg',
    };
  }
  next();
};

module.exports = (req, res, next) => {
  if (req.path === '/episodes') {
    episodesMiddleware(req, res, next);
  } else {
    next();
  }
};
