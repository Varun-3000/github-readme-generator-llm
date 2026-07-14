export function analyzeDatabases(
    dependencies
) {

    const databases = [];

    const mapping = {

        sqlalchemy: "SQLAlchemy",
        psycopg2: "PostgreSQL",
        pymongo: "MongoDB",
        motor: "MongoDB",
        redis: "Redis",
        sqlite3: "SQLite",
        mysqlclient: "MySQL"
    };

    for (const dep of dependencies) {

        const db =
            mapping[
                dep.name.toLowerCase()
            ];

        if (db) {

            databases.push({
                database: db,
                evidence: dep.name,
                confidence: 1.0
            });
        }
    }

    return databases;
}