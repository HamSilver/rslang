enum ANSWER {
  WRONG = 'WRONG',
  RIGHT = 'RIGHT',
}

enum GAME {
  SPRINT = 'sprint',
  AUDIOCALL = 'audiocall',
}

enum PAGE {
  HOME = 'home',
  TEXTBOOK = 'textbook',
  GAMES = 'games',
  GAMESPRINT = 'games/sprint',
  GAMEAUDIOCALL = 'games/audiocall',
  PLAYSPRINT = 'play/sprint',
  PLAYAUDIOCALL = 'play/audiocall',
  STATISTIC = 'statistic',
}

enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

enum ICON {
  SPEAKER = 'speaker',
}

enum DIFFICULTY {
  NONE = '',
  NEW = 'new',
  HARD = 'hard',
  LEARN = 'learn',
}

enum WINSNEEDED {
  NEW = 3,
  HARD = 5,
}

export {
  ANSWER, GAME, PAGE, METHOD, ICON, DIFFICULTY, WINSNEEDED,
};
