import type { Config } from '@jest/types';
import { config } from 'dotenv';

config({ path: '.test.env' });

export default async (): Promise<Config.InitialOptions> => ({
    verbose: true,
    detectOpenHandles: true,
    detectLeaks: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    rootDir: 'src',
    moduleDirectories: ['<rootDir>/node_modules'],
});
