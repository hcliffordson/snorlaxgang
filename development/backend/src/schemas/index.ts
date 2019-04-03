import { importSchema } from 'graphql-import';
import fs from 'fs';

const prismaModelsPath = __dirname + '/datamodel.prisma';
const appSchemaPath = __dirname + '/schema.graphql';

const readUnsafeSchema = (path: string): string => {
    const data = fs.readFileSync(path, {encoding: 'utf8'});
    return data.split('\n')
        .map(s => s.split('@')[0].trimRight())
        .join('\n');
};

const modelsSchema = readUnsafeSchema(prismaModelsPath);
const appSchema = readUnsafeSchema(appSchemaPath);

const schemas = {
    appSchema, 'models': modelsSchema
};

const resolvedSchemas = importSchema(appSchema, schemas);

export const prismaSchema = modelsSchema;
export const typeDefs = resolvedSchemas;
