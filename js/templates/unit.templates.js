const UNIT_TEMPLATES = new Repository(
    ['key', 'sheet', 'sx', 'sy', 'hitradius', 'hp', 'def', 'power', 'speed', 'value', 'atkRange', 'atkCooldown', 'atkFrames'],
    // PLAYER UNITS
    ['P_PEASANT', 'player-units', 0, 0, 18, 20, 0, 10, 5, 10, 40, 120, [20, 5, 30]],
    ['P_SWORDSMAN', 'player-units', 0, 1, 22, 30, 2, 15, 4, 30, 60, 140, [20, 5, 40]],
    ['P_WIZARD', 'player-units', 0, 2, 18, 15, 0, 30, 3, 40, 400, 240, [30, 20, 30]],
    // ENEMY UNITS
    ['E_GRUNT', 'enemy-units', 0, 0, 18, 15, 0, 8, 4, 8, 40, 180, [20, 5, 30]],
    ['E_SKELETON', 'enemy-units', 0, 1, 16, 10, 0, 6, 3, 5, 40, 210, [30, 5, 40]],
);