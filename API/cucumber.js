const cucumberConfig =
{
    "default": {
        "requireModule": ["ts-node/register"],
        "require": ["tests/step-definitions/**/*.ts"],
        "format": [
            ["json", "reports/cucumber_report.json"],
            ["junit", "reports/junit.xml"],
            ["html", "reports/html-formatter.html"]

        ],
        "publish-quiet": true,
        "paths": ["tests/features/**/*.feature"]
    }
};

module.exports = cucumberConfig;