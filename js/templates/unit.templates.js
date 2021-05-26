const UNIT_TEMPLATES = new Repository(
    ['key', 'name', 'sheet', 'sx', 'sy', 'hitradius', 'hp', 'def', 'power', 'speed', 'value', 'atkRange', 'atkCooldown', 'atkFrames'],
    // PLAYER UNITS
    ['P_PEASANT', 'Peasant', 'player-units', 0, 0, 18, 25, 0, 5, 2, 10, 50, 120, [20, 5, 30]],
    ['P_SWORDSMAN', 'Swordsman', 'player-units', 0, 1, 30, 30, 2, 7, 1.5, 30, 60, 140, [20, 5, 40]],
    ['P_WIZARD', 'Wizard', 'player-units', 0, 2, 18, 15, 0, 30, 1, 15, 400, 240, [30, 20, 30]],
    ['P_AXEMAN', 'Axeman', 'player-units', 0, 3, 24, 40, 0, 10, 2.5, 80, 70, 180, [40, 5, 40]],
    ['P_GUARD', 'Guard', 'player-units', 0, 4, 22, 50, 4, 6, 1, 80, 60, 140, [30, 5, 40]],
    // ENEMY UNITS
    ['E_GRUNT', 'Grunt', 'enemy-units', 0, 0, 18, 20, 0, 5, 2, 8, 50, 180, [20, 5, 30]],
    ['E_SKELETON', 'Skeleton', 'enemy-units', 0, 1, 15, 10, 0, 4, 1, 5, 50, 210, [30, 5, 40]],
);