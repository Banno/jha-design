const pkg = require('../package.json');
const log = require('fancy-log');
const chalk = require('chalk');

// Utilities

function logo() {
  const color = chalk.hex('#004b85');
  log(
    color(
      '............XXXXXXXXXXXXXXXXXXXXXXXXXX..........................................'
    )
  );
  log(
    color(
      '............XXXXXXXXXXXX.XXXXXXXXXXXX...........................................'
    )
  );
  log(
    color(
      '...........XXXXXXXXXXXXXXXXXXXXXXXXXX...........................................'
    )
  );
  log(
    color(
      '...........XXXXXXXXXXXXXXXXXXXXXXXXXX.XXXXXXXXXXXX............XXXXXXXXXXXXXXXXXX'
    )
  );
  log(
    color(
      '...........XXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXXX......XXXXXXXXXXXXXXXXXXXXXX'
    )
  );
  log(
    color(
      '..........XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX....XXXXXXXXXXXXXXXXXXXXXXXX'
    )
  );
  log(
    color(
      '..........XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXX'
    )
  );
  log(
    color(
      '..........XXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXX'
    )
  );
  log(
    color(
      '.........XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX..XXXXXXXXXXXXX'
    )
  );
  log(
    color(
      '.........XXXXXXXXXXXXXXXXXXXXXXXXXX...XXXXXXXXXXXXXXXXXXXXXXXXXX...XXXXXXXXXXXXX'
    )
  );
  log(
    color(
      '.........XXXXXXXXXXXX.XXXXXXXXXXXX....XXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXX.'
    )
  );
  log(
    color(
      '........XXXXXXXXXXXXXXXXXXXXXXXXXX...XXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXX.'
    )
  );
  log(
    color(
      '........XXXXXXXXXXXX.XXXXXXXXXXXXX...XXXXXXXXXXXXX..XXXXXXXXXXXXXXXXXXXXXXXXXXX.'
    )
  );
  log(
    color(
      '.......XXXXXXXXXXXXXXXXXXXXXXXXXX...XXXXXXXXXXXXXX...XXXXXXXXXXXXXXXXXXXXXXXXX..'
    )
  );
  log(
    color(
      '.......XXXXXXXXXXXXXXXXXXXXXXXXXX...XXXXXXXXXXXXXX....XXXXXXXXXXXXXXXXXXXXXXXX..'
    )
  );
  log(
    color(
      'XXXXXXXXXXXXXXXXXXX.............................................................'
    )
  );
  log(
    color(
      'XXXXXXXXXXXXXXXXXXX.............................................................'
    )
  );
  log(
    color(
      'XXXXXXXXXXXXXXXXXX..............................................................'
    )
  );
  log(
    color(
      'XXXXXXXXXXXXXXXXX...............................................................'
    )
  );
  log(
    color(
      'XXXXXXXXXXXXXXXX................................................................'
    )
  );
  log(
    color(
      'XXXXXXXXXXXXXX..................................................................'
    )
  );
}

module.exports = {
  logIntroduction: function(message) {
    message = message || 'Jack Henry Design System';
    log(chalk.yellow('v' + pkg.version), message);
    logo();
  },
  logMessage: function(message) {
    log(chalk.green(message));
  },
};
