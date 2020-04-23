export default {
  dataSource: [
    {
      key: `main:vkqvwf8p:797f1259-8c5c-4dee-b70e-78910b71e55e`,
      status: {
        timestamp: `2020-03-23T14:09:59.738Z`,
        jobId: `main:vkqvwf8p:797f1259-8c5c-4dee-b70e-78910b71e55e`,
        status: `completed`,
        level: `info`,
        pipeline: `vkqvwf8p`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-23T14:10:18.788Z`,
        jobId: `main:vkqvwf8p:797f1259-8c5c-4dee-b70e-78910b71e55e`,
        pipeline: `vkqvwf8p`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:vkqvwf8p:797f1259-8c5c-4dee-b70e-78910b71e55e/result.json`,
          },
        },
        status: `completed`,
        timeTook: 19.132,
      },
      pipeline: {
        name: `vkqvwf8p`,
        nodes: [
          {
            nodeName: `vkqvwf8p`,
            algorithmName: `vkqvwf8p`,
            input: [4],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:vkqvwf8p:797f1259-8c5c-4dee-b70e-78910b71e55e`,
        startTime: 1584972599656,
        lastRunResult: null,
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:vkqvwf8p:797f1259-8c5c-4dee-b70e-78910b71e55e`,
        timestamp: 1584972618812,
        edges: [],
        nodes: [
          {
            nodeName: `vkqvwf8p`,
            algorithmName: `vkqvwf8p`,
            taskId: `vkqvwf8p:vkqvwf8p:9953e65a-f9fc-4191-83f1-e8d04dfae9e4`,
            input: [4],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:vkqvwf8p:797f1259-8c5c-4dee-b70e-78910b71e55e/vkqvwf8p:vkqvwf8p:9953e65a-f9fc-4191-83f1-e8d04dfae9e4`,
              },
            },
            podName: `vkqvwf8p-91d6f659f30a1f834baa28f1c299c3-dbz7x`,
            status: `succeed`,
            startTime: 1584972614661,
            endTime: 1584972618740,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:atevoied:e224b142-7212-4464-8c32-aed06d368eb3`,
      status: {
        timestamp: `2020-03-23T11:45:12.163Z`,
        jobId: `main:atevoied:e224b142-7212-4464-8c32-aed06d368eb3`,
        status: `completed`,
        level: `info`,
        pipeline: `atevoied`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-23T11:45:33.218Z`,
        jobId: `main:atevoied:e224b142-7212-4464-8c32-aed06d368eb3`,
        pipeline: `atevoied`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:atevoied:e224b142-7212-4464-8c32-aed06d368eb3/result.json`,
          },
        },
        status: `completed`,
        timeTook: 21.136,
      },
      pipeline: {
        name: `atevoied`,
        nodes: [
          {
            nodeName: `atevoied`,
            algorithmName: `atevoied`,
            input: [
              [
                {
                  user: `fred`,
                  age: 48,
                },
                {
                  user: `barney`,
                  age: 34,
                },
                {
                  user: `fred`,
                  age: 40,
                },
                {
                  user: `barney`,
                  age: 36,
                },
              ],
              [`user`, `age`],
            ],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:atevoied:e224b142-7212-4464-8c32-aed06d368eb3`,
        startTime: 1584963912083,
        lastRunResult: null,
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:atevoied:e224b142-7212-4464-8c32-aed06d368eb3`,
        timestamp: 1584963933250,
        edges: [],
        nodes: [
          {
            nodeName: `atevoied`,
            algorithmName: `atevoied`,
            taskId: `atevoied:atevoied:998c69cf-449c-4f69-8370-d134c53cff45`,
            input: [
              [
                {
                  user: `fred`,
                  age: 48,
                },
                {
                  user: `barney`,
                  age: 34,
                },
                {
                  user: `fred`,
                  age: 40,
                },
                {
                  user: `barney`,
                  age: 36,
                },
              ],
              [`user`, `age`],
            ],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:atevoied:e224b142-7212-4464-8c32-aed06d368eb3/atevoied:atevoied:998c69cf-449c-4f69-8370-d134c53cff45`,
              },
            },
            podName: `atevoied-7eca2b2862599fd17577019ece06b7-ks27p`,
            status: `succeed`,
            startTime: 1584963933105,
            endTime: 1584963933170,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:lfq96h0n:604db971-b46f-4eb2-9d65-f96ea230bea9`,
      status: {
        timestamp: `2020-03-23T11:43:35.752Z`,
        jobId: `main:lfq96h0n:604db971-b46f-4eb2-9d65-f96ea230bea9`,
        status: `completed`,
        level: `info`,
        pipeline: `lfq96h0n`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-23T11:43:55.502Z`,
        jobId: `main:lfq96h0n:604db971-b46f-4eb2-9d65-f96ea230bea9`,
        pipeline: `lfq96h0n`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:lfq96h0n:604db971-b46f-4eb2-9d65-f96ea230bea9/result.json`,
          },
        },
        status: `completed`,
        timeTook: 19.845,
      },
      pipeline: {
        name: `lfq96h0n`,
        nodes: [
          {
            nodeName: `lfq96h0n`,
            algorithmName: `lfq96h0n`,
            input: [4],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:lfq96h0n:604db971-b46f-4eb2-9d65-f96ea230bea9`,
        startTime: 1584963815657,
        lastRunResult: null,
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:lfq96h0n:604db971-b46f-4eb2-9d65-f96ea230bea9`,
        timestamp: 1584963835527,
        edges: [],
        nodes: [
          {
            nodeName: `lfq96h0n`,
            algorithmName: `lfq96h0n`,
            taskId: `lfq96h0n:lfq96h0n:47d5eaa9-fdc4-41ad-a64d-4909001f8a50`,
            input: [4],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:lfq96h0n:604db971-b46f-4eb2-9d65-f96ea230bea9/lfq96h0n:lfq96h0n:47d5eaa9-fdc4-41ad-a64d-4909001f8a50`,
              },
            },
            podName: `lfq96h0n-0d30c875390de174e5e796c1af634d-l7fkt`,
            status: `succeed`,
            startTime: 1584963834352,
            endTime: 1584963835437,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:pymizl1z:35038e9b-78db-492d-858c-87121e820dc8`,
      status: {
        timestamp: `2020-03-23T11:43:14.707Z`,
        jobId: `main:pymizl1z:35038e9b-78db-492d-858c-87121e820dc8`,
        status: `completed`,
        level: `info`,
        pipeline: `pymizl1z`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-23T11:43:45.396Z`,
        jobId: `main:pymizl1z:35038e9b-78db-492d-858c-87121e820dc8`,
        pipeline: `pymizl1z`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:pymizl1z:35038e9b-78db-492d-858c-87121e820dc8/result.json`,
          },
        },
        status: `completed`,
        timeTook: 30.784,
      },
      pipeline: {
        name: `pymizl1z`,
        nodes: [
          {
            nodeName: `pymizl1z`,
            algorithmName: `pymizl1z`,
            input: [4],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:pymizl1z:35038e9b-78db-492d-858c-87121e820dc8`,
        startTime: 1584963794612,
        lastRunResult: null,
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:pymizl1z:35038e9b-78db-492d-858c-87121e820dc8`,
        timestamp: 1584963825431,
        edges: [],
        nodes: [
          {
            nodeName: `pymizl1z`,
            algorithmName: `pymizl1z`,
            taskId: `pymizl1z:pymizl1z:37804e9b-8cd7-480c-97c2-75f373e1f9f3`,
            input: [4],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:pymizl1z:35038e9b-78db-492d-858c-87121e820dc8/pymizl1z:pymizl1z:37804e9b-8cd7-480c-97c2-75f373e1f9f3`,
              },
            },
            podName: `pymizl1z-cdf89ac60983dbf9aa05639e1e86b6-qnjb8`,
            status: `succeed`,
            startTime: 1584963824242,
            endTime: 1584963825336,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:aebxfccx:6eab385d-6bf7-4716-a7b0-420f3110bb18`,
      status: {
        timestamp: `2020-03-23T10:59:09.948Z`,
        jobId: `main:aebxfccx:6eab385d-6bf7-4716-a7b0-420f3110bb18`,
        status: `completed`,
        level: `info`,
        pipeline: `aebxfccx`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-23T10:59:32.251Z`,
        jobId: `main:aebxfccx:6eab385d-6bf7-4716-a7b0-420f3110bb18`,
        pipeline: `aebxfccx`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:aebxfccx:6eab385d-6bf7-4716-a7b0-420f3110bb18/result.json`,
          },
        },
        status: `completed`,
        timeTook: 22.446,
      },
      pipeline: {
        name: `aebxfccx`,
        nodes: [
          {
            nodeName: `aebxfccx`,
            algorithmName: `aebxfccx`,
            input: [
              [
                {
                  user: `fred`,
                  age: 48,
                },
                {
                  user: `barney`,
                  age: 34,
                },
                {
                  user: `fred`,
                  age: 40,
                },
                {
                  user: `barney`,
                  age: 36,
                },
              ],
              [`user`, `age`],
            ],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:aebxfccx:6eab385d-6bf7-4716-a7b0-420f3110bb18`,
        startTime: 1584961149805,
        lastRunResult: null,
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:aebxfccx:6eab385d-6bf7-4716-a7b0-420f3110bb18`,
        timestamp: 1584961172278,
        edges: [],
        nodes: [
          {
            nodeName: `aebxfccx`,
            algorithmName: `aebxfccx`,
            taskId: `aebxfccx:aebxfccx:220c71af-60b8-47d9-8892-38ac67b5bfc7`,
            input: [
              [
                {
                  user: `fred`,
                  age: 48,
                },
                {
                  user: `barney`,
                  age: 34,
                },
                {
                  user: `fred`,
                  age: 40,
                },
                {
                  user: `barney`,
                  age: 36,
                },
              ],
              [`user`, `age`],
            ],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:aebxfccx:6eab385d-6bf7-4716-a7b0-420f3110bb18/aebxfccx:aebxfccx:220c71af-60b8-47d9-8892-38ac67b5bfc7`,
              },
            },
            podName: `aebxfccx-4bc2ed76b6431b9c29d37bf95e6450-ztz96`,
            status: `succeed`,
            startTime: 1584961172082,
            endTime: 1584961172155,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:e0qkdpe3:dea48137-0652-4742-a2bf-6bb0319f8ddb`,
      status: {
        timestamp: `2020-03-23T10:52:22.464Z`,
        jobId: `main:e0qkdpe3:dea48137-0652-4742-a2bf-6bb0319f8ddb`,
        status: `completed`,
        level: `info`,
        pipeline: `e0qkdpe3`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-23T10:52:44.697Z`,
        jobId: `main:e0qkdpe3:dea48137-0652-4742-a2bf-6bb0319f8ddb`,
        pipeline: `e0qkdpe3`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:e0qkdpe3:dea48137-0652-4742-a2bf-6bb0319f8ddb/result.json`,
          },
        },
        status: `completed`,
        timeTook: 22.301,
      },
      pipeline: {
        name: `e0qkdpe3`,
        nodes: [
          {
            nodeName: `e0qkdpe3`,
            algorithmName: `e0qkdpe3`,
            input: [
              [
                {
                  user: `fred`,
                  age: 48,
                },
                {
                  user: `barney`,
                  age: 34,
                },
                {
                  user: `fred`,
                  age: 40,
                },
                {
                  user: `barney`,
                  age: 36,
                },
              ],
              [`user`, `age`],
            ],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:e0qkdpe3:dea48137-0652-4742-a2bf-6bb0319f8ddb`,
        startTime: 1584960742396,
        lastRunResult: null,
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:e0qkdpe3:dea48137-0652-4742-a2bf-6bb0319f8ddb`,
        timestamp: 1584960764714,
        edges: [],
        nodes: [
          {
            nodeName: `e0qkdpe3`,
            algorithmName: `e0qkdpe3`,
            taskId: `e0qkdpe3:e0qkdpe3:6f76af53-d946-4b89-8d1b-21a49bcce00d`,
            input: [
              [
                {
                  user: `fred`,
                  age: 48,
                },
                {
                  user: `barney`,
                  age: 34,
                },
                {
                  user: `fred`,
                  age: 40,
                },
                {
                  user: `barney`,
                  age: 36,
                },
              ],
              [`user`, `age`],
            ],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:e0qkdpe3:dea48137-0652-4742-a2bf-6bb0319f8ddb/e0qkdpe3:e0qkdpe3:6f76af53-d946-4b89-8d1b-21a49bcce00d`,
              },
            },
            podName: `e0qkdpe3-ca84819b8f70df7f5c795d677dc458-rmcqr`,
            status: `succeed`,
            startTime: 1584960764512,
            endTime: 1584960764586,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:rjwrd4yd:de9df3de-aad7-4ba0-b41a-dc542ef48c7f`,
      status: {
        timestamp: `2020-03-23T10:46:30.637Z`,
        jobId: `main:rjwrd4yd:de9df3de-aad7-4ba0-b41a-dc542ef48c7f`,
        status: `completed`,
        level: `info`,
        pipeline: `rjwrd4yd`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-23T10:46:47.921Z`,
        jobId: `main:rjwrd4yd:de9df3de-aad7-4ba0-b41a-dc542ef48c7f`,
        pipeline: `rjwrd4yd`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:rjwrd4yd:de9df3de-aad7-4ba0-b41a-dc542ef48c7f/result.json`,
          },
        },
        status: `completed`,
        timeTook: 17.353,
      },
      pipeline: {
        name: `rjwrd4yd`,
        nodes: [
          {
            nodeName: `rjwrd4yd`,
            algorithmName: `rjwrd4yd`,
            input: [
              [
                {
                  user: `fred`,
                  age: 48,
                },
                {
                  user: `barney`,
                  age: 34,
                },
                {
                  user: `fred`,
                  age: 40,
                },
                {
                  user: `barney`,
                  age: 36,
                },
              ],
              [`user`, `age`],
            ],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:rjwrd4yd:de9df3de-aad7-4ba0-b41a-dc542ef48c7f`,
        startTime: 1584960390568,
        lastRunResult: null,
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:rjwrd4yd:de9df3de-aad7-4ba0-b41a-dc542ef48c7f`,
        timestamp: 1584960407946,
        edges: [],
        nodes: [
          {
            nodeName: `rjwrd4yd`,
            algorithmName: `rjwrd4yd`,
            taskId: `rjwrd4yd:rjwrd4yd:f7dc69ca-b17c-49da-8b52-3b369d5eccbb`,
            input: [
              [
                {
                  user: `fred`,
                  age: 48,
                },
                {
                  user: `barney`,
                  age: 34,
                },
                {
                  user: `fred`,
                  age: 40,
                },
                {
                  user: `barney`,
                  age: 36,
                },
              ],
              [`user`, `age`],
            ],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:rjwrd4yd:de9df3de-aad7-4ba0-b41a-dc542ef48c7f/rjwrd4yd:rjwrd4yd:f7dc69ca-b17c-49da-8b52-3b369d5eccbb`,
              },
            },
            podName: `rjwrd4yd-2f046fccf7f88cfab4829f2e8f235b-gjbnb`,
            status: `succeed`,
            startTime: 1584960407796,
            endTime: 1584960407870,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:sorttest2:20358611-3347-444a-8277-ae6293014ca3`,
      status: {
        timestamp: `2020-03-23T10:17:08.054Z`,
        jobId: `main:sorttest2:20358611-3347-444a-8277-ae6293014ca3`,
        status: `completed`,
        level: `info`,
        pipeline: `sorttest2`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-23T10:17:17.919Z`,
        jobId: `main:sorttest2:20358611-3347-444a-8277-ae6293014ca3`,
        pipeline: `sorttest2`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:sorttest2:20358611-3347-444a-8277-ae6293014ca3/result.json`,
          },
        },
        status: `completed`,
        timeTook: 9.934,
      },
      pipeline: {
        name: `sorttest2`,
        nodes: [
          {
            nodeName: `sorttest2`,
            algorithmName: `sorttest2`,
            input: [
              [
                {
                  user: `fred`,
                  age: 48,
                },
                {
                  user: `barney`,
                  age: 34,
                },
                {
                  user: `fred`,
                  age: 40,
                },
                {
                  user: `barney`,
                  age: 36,
                },
              ],
              [`user`, `age`],
            ],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:sorttest2:20358611-3347-444a-8277-ae6293014ca3`,
        startTime: 1584958627985,
        lastRunResult: null,
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:sorttest2:20358611-3347-444a-8277-ae6293014ca3`,
        timestamp: 1584958637945,
        edges: [],
        nodes: [
          {
            nodeName: `sorttest2`,
            algorithmName: `sorttest2`,
            taskId: `sorttest2:sorttest2:64436b28-8739-4c02-9cc3-632b8d297be5`,
            input: [
              [
                {
                  user: `fred`,
                  age: 48,
                },
                {
                  user: `barney`,
                  age: 34,
                },
                {
                  user: `fred`,
                  age: 40,
                },
                {
                  user: `barney`,
                  age: 36,
                },
              ],
              [`user`, `age`],
            ],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:sorttest2:20358611-3347-444a-8277-ae6293014ca3/sorttest2:sorttest2:64436b28-8739-4c02-9cc3-632b8d297be5`,
              },
            },
            podName: `sorttest2-127bed6bcf7a60e79fc4f0859df2f6-6c6sl`,
            status: `succeed`,
            startTime: 1584958637722,
            endTime: 1584958637820,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:sorttest1:1ba5d737-59ce-4271-922c-e7e626bb76ce`,
      status: {
        timestamp: `2020-03-23T10:11:22.628Z`,
        jobId: `main:sorttest1:1ba5d737-59ce-4271-922c-e7e626bb76ce`,
        status: `failed`,
        level: `error`,
        pipeline: `sorttest1`,
        data: {
          progress: 100,
          details: `100% completed, 1 failed`,
          states: {
            failed: 1,
          },
        },
        error: `Error: result is not defined`,
        nodeName: `sorttest1`,
      },
      results: {
        timestamp: `2020-03-23T10:11:29.400Z`,
        jobId: `main:sorttest1:1ba5d737-59ce-4271-922c-e7e626bb76ce`,
        pipeline: `sorttest1`,
        data: null,
        status: `failed`,
        error: `Error: result is not defined`,
        nodeName: `sorttest1`,
        timeTook: 6.846,
      },
      pipeline: {
        name: `sorttest1`,
        nodes: [
          {
            nodeName: `sorttest1`,
            algorithmName: `sorttest1`,
            input: [
              [
                {
                  user: `fred`,
                  age: 48,
                },
                {
                  user: `barney`,
                  age: 34,
                },
                {
                  user: `fred`,
                  age: 40,
                },
                {
                  user: `barney`,
                  age: 36,
                },
              ],
              [`user`, `age`],
            ],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:sorttest1:1ba5d737-59ce-4271-922c-e7e626bb76ce`,
        startTime: 1584958282554,
        lastRunResult: {
          timestamp: `2020-03-23T10:08:38.101Z`,
          status: `failed`,
          timeTook: 8.51,
        },
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:sorttest1:1ba5d737-59ce-4271-922c-e7e626bb76ce`,
        timestamp: 1584958289439,
        edges: [],
        nodes: [
          {
            nodeName: `sorttest1`,
            algorithmName: `sorttest1`,
            taskId: `sorttest1:sorttest1:7ecbcf54-01d8-4aea-95c8-5c24176253a3`,
            input: [
              [
                {
                  user: `fred`,
                  age: 48,
                },
                {
                  user: `barney`,
                  age: 34,
                },
                {
                  user: `fred`,
                  age: 40,
                },
                {
                  user: `barney`,
                  age: 36,
                },
              ],
              [`user`, `age`],
            ],
            podName: `sorttest1-3f333f1baa6f2bd2dd2fb30f19f96a-zgbz4`,
            status: `failed`,
            error: `Error: result is not defined`,
            startTime: 1584958289344,
            endTime: 1584958289379,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:sorttest1:578aee3b-cd67-4626-97af-7a6876243cf0`,
      status: {
        timestamp: `2020-03-23T10:08:29.682Z`,
        jobId: `main:sorttest1:578aee3b-cd67-4626-97af-7a6876243cf0`,
        status: `failed`,
        level: `error`,
        pipeline: `sorttest1`,
        data: {
          progress: 100,
          details: `100% completed, 1 failed`,
          states: {
            failed: 1,
          },
        },
        error: `Error: result is not defined`,
        nodeName: `sorttest1`,
      },
      results: {
        timestamp: `2020-03-23T10:08:38.101Z`,
        jobId: `main:sorttest1:578aee3b-cd67-4626-97af-7a6876243cf0`,
        pipeline: `sorttest1`,
        data: null,
        status: `failed`,
        error: `Error: result is not defined`,
        nodeName: `sorttest1`,
        timeTook: 8.51,
      },
      pipeline: {
        name: `sorttest1`,
        nodes: [
          {
            nodeName: `sorttest1`,
            algorithmName: `sorttest1`,
            input: [
              [
                {
                  user: `fred`,
                  age: 48,
                },
                {
                  user: `barney`,
                  age: 34,
                },
                {
                  user: `fred`,
                  age: 40,
                },
                {
                  user: `barney`,
                  age: 36,
                },
              ],
              [`user`, `age`],
            ],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:sorttest1:578aee3b-cd67-4626-97af-7a6876243cf0`,
        startTime: 1584958109592,
        lastRunResult: null,
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:sorttest1:578aee3b-cd67-4626-97af-7a6876243cf0`,
        timestamp: 1584958118130,
        edges: [],
        nodes: [
          {
            nodeName: `sorttest1`,
            algorithmName: `sorttest1`,
            taskId: `sorttest1:sorttest1:2f3b68da-ff55-40f6-9566-8db95ef8906e`,
            input: [
              [
                {
                  user: `fred`,
                  age: 48,
                },
                {
                  user: `barney`,
                  age: 34,
                },
                {
                  user: `fred`,
                  age: 40,
                },
                {
                  user: `barney`,
                  age: 36,
                },
              ],
              [`user`, `age`],
            ],
            podName: `sorttest1-a48bff133aed09f9b887f2dc4aa3ce-zfzhf`,
            status: `failed`,
            error: `Error: result is not defined`,
            startTime: 1584958118042,
            endTime: 1584958118082,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:sorttest:c5a25755-cf8b-40b6-ac05-ec4058cedf75`,
      status: {
        timestamp: `2020-03-23T10:01:55.011Z`,
        jobId: `main:sorttest:c5a25755-cf8b-40b6-ac05-ec4058cedf75`,
        status: `completed`,
        level: `info`,
        pipeline: `sorttest`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-23T10:02:02.707Z`,
        jobId: `main:sorttest:c5a25755-cf8b-40b6-ac05-ec4058cedf75`,
        pipeline: `sorttest`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:sorttest:c5a25755-cf8b-40b6-ac05-ec4058cedf75/result.json`,
          },
        },
        status: `completed`,
        timeTook: 7.777,
      },
      pipeline: {
        name: `sorttest`,
        nodes: [
          {
            nodeName: `sorttest`,
            algorithmName: `sorttest`,
            input: [
              [
                {
                  user: `fred`,
                  age: 48,
                },
                {
                  user: `barney`,
                  age: 34,
                },
                {
                  user: `fred`,
                  age: 40,
                },
                {
                  user: `barney`,
                  age: 36,
                },
              ],
              [`user`, `age`],
            ],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:sorttest:c5a25755-cf8b-40b6-ac05-ec4058cedf75`,
        startTime: 1584957714930,
        lastRunResult: {
          timestamp: `2020-03-23T09:52:16.326Z`,
          status: `completed`,
          timeTook: 1.706,
        },
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:sorttest:c5a25755-cf8b-40b6-ac05-ec4058cedf75`,
        timestamp: 1584957722725,
        edges: [],
        nodes: [
          {
            nodeName: `sorttest`,
            algorithmName: `sorttest`,
            taskId: `sorttest:sorttest:932dbc3c-3b5a-47a7-afa6-5b5f6759fed1`,
            input: [
              [
                {
                  user: `fred`,
                  age: 48,
                },
                {
                  user: `barney`,
                  age: 34,
                },
                {
                  user: `fred`,
                  age: 40,
                },
                {
                  user: `barney`,
                  age: 36,
                },
              ],
              [`user`, `age`],
            ],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:sorttest:c5a25755-cf8b-40b6-ac05-ec4058cedf75/sorttest:sorttest:932dbc3c-3b5a-47a7-afa6-5b5f6759fed1`,
              },
            },
            podName: `sorttest-99a21cb1452e360fef5cb31b6558fd-tv47l`,
            status: `succeed`,
            startTime: 1584957722572,
            endTime: 1584957722652,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:sorttest:e43a46e7-53c9-4d39-935d-11b47d6dadb7`,
      status: {
        timestamp: `2020-03-23T09:52:14.760Z`,
        jobId: `main:sorttest:e43a46e7-53c9-4d39-935d-11b47d6dadb7`,
        status: `completed`,
        level: `info`,
        pipeline: `sorttest`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-23T09:52:16.326Z`,
        jobId: `main:sorttest:e43a46e7-53c9-4d39-935d-11b47d6dadb7`,
        pipeline: `sorttest`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:sorttest:e43a46e7-53c9-4d39-935d-11b47d6dadb7/result.json`,
          },
        },
        status: `completed`,
        timeTook: 1.706,
      },
      pipeline: {
        name: `sorttest`,
        nodes: [
          {
            nodeName: `sorttest`,
            algorithmName: `sorttest`,
            input: [
              [
                {
                  user: `fred`,
                  age: 48,
                },
                {
                  user: `barney`,
                  age: 34,
                },
                {
                  user: `fred`,
                  age: 40,
                },
                {
                  user: `barney`,
                  age: 36,
                },
              ],
              [`user`, `age`],
            ],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:sorttest:e43a46e7-53c9-4d39-935d-11b47d6dadb7`,
        startTime: 1584957134620,
        lastRunResult: {
          timestamp: `2020-03-23T09:51:39.077Z`,
          status: `completed`,
          timeTook: 7.492,
        },
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:sorttest:e43a46e7-53c9-4d39-935d-11b47d6dadb7`,
        timestamp: 1584957136348,
        edges: [],
        nodes: [
          {
            nodeName: `sorttest`,
            algorithmName: `sorttest`,
            taskId: `sorttest:sorttest:9588b24d-1561-44ff-acd3-db64a87a8eb0`,
            input: [
              [
                {
                  user: `fred`,
                  age: 48,
                },
                {
                  user: `barney`,
                  age: 34,
                },
                {
                  user: `fred`,
                  age: 40,
                },
                {
                  user: `barney`,
                  age: 36,
                },
              ],
              [`user`, `age`],
            ],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:sorttest:e43a46e7-53c9-4d39-935d-11b47d6dadb7/sorttest:sorttest:9588b24d-1561-44ff-acd3-db64a87a8eb0`,
              },
            },
            podName: `sorttest-cdfe7477c738644d91740da962167d-ww7n6`,
            status: `succeed`,
            startTime: 1584957136218,
            endTime: 1584957136276,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:sorttest:e829d5ae-11f3-4f94-b6e0-9de2f9b82924`,
      status: {
        timestamp: `2020-03-23T09:51:31.670Z`,
        jobId: `main:sorttest:e829d5ae-11f3-4f94-b6e0-9de2f9b82924`,
        status: `completed`,
        level: `info`,
        pipeline: `sorttest`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-23T09:51:39.077Z`,
        jobId: `main:sorttest:e829d5ae-11f3-4f94-b6e0-9de2f9b82924`,
        pipeline: `sorttest`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:sorttest:e829d5ae-11f3-4f94-b6e0-9de2f9b82924/result.json`,
          },
        },
        status: `completed`,
        timeTook: 7.492,
      },
      pipeline: {
        name: `sorttest`,
        nodes: [
          {
            nodeName: `sorttest`,
            algorithmName: `sorttest`,
            input: [
              [
                [
                  {
                    user: `fred`,
                    age: 48,
                  },
                  {
                    user: `barney`,
                    age: 34,
                  },
                  {
                    user: `fred`,
                    age: 40,
                  },
                  {
                    user: `barney`,
                    age: 36,
                  },
                ],
                [`user`, `age`],
              ],
            ],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:sorttest:e829d5ae-11f3-4f94-b6e0-9de2f9b82924`,
        startTime: 1584957091585,
        lastRunResult: {
          timestamp: `2020-03-23T09:43:50.194Z`,
          status: `completed`,
          timeTook: 0.985,
        },
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:sorttest:e829d5ae-11f3-4f94-b6e0-9de2f9b82924`,
        timestamp: 1584957099096,
        edges: [],
        nodes: [
          {
            nodeName: `sorttest`,
            algorithmName: `sorttest`,
            taskId: `sorttest:sorttest:f93ed4f5-cde5-44f4-84c8-ca19694579ec`,
            input: [
              [
                [
                  {
                    user: `fred`,
                    age: 48,
                  },
                  {
                    user: `barney`,
                    age: 34,
                  },
                  {
                    user: `fred`,
                    age: 40,
                  },
                  {
                    user: `barney`,
                    age: 36,
                  },
                ],
                [`user`, `age`],
              ],
            ],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:sorttest:e829d5ae-11f3-4f94-b6e0-9de2f9b82924/sorttest:sorttest:f93ed4f5-cde5-44f4-84c8-ca19694579ec`,
              },
            },
            podName: `sorttest-cdfe7477c738644d91740da962167d-ww7n6`,
            status: `succeed`,
            startTime: 1584957098932,
            endTime: 1584957099012,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:sorttest:741c23a1-5ae6-4d21-98c8-fc83e2d5606a`,
      status: {
        timestamp: `2020-03-23T09:43:49.286Z`,
        jobId: `main:sorttest:741c23a1-5ae6-4d21-98c8-fc83e2d5606a`,
        status: `completed`,
        level: `info`,
        pipeline: `sorttest`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-23T09:43:50.194Z`,
        jobId: `main:sorttest:741c23a1-5ae6-4d21-98c8-fc83e2d5606a`,
        pipeline: `sorttest`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:sorttest:741c23a1-5ae6-4d21-98c8-fc83e2d5606a/result.json`,
          },
        },
        status: `completed`,
        timeTook: 0.985,
      },
      pipeline: {
        name: `sorttest`,
        nodes: [
          {
            nodeName: `sorttest`,
            algorithmName: `sorttest`,
            input: [
              [
                [
                  {
                    user: `fred`,
                    age: 48,
                  },
                  {
                    user: `barney`,
                    age: 34,
                  },
                  {
                    user: `fred`,
                    age: 40,
                  },
                  {
                    user: `barney`,
                    age: 36,
                  },
                ],
                [`user`, `age`],
              ],
            ],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:sorttest:741c23a1-5ae6-4d21-98c8-fc83e2d5606a`,
        startTime: 1584956629209,
        lastRunResult: {
          timestamp: `2020-03-23T09:42:30.152Z`,
          status: `completed`,
          timeTook: 0.893,
        },
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:sorttest:741c23a1-5ae6-4d21-98c8-fc83e2d5606a`,
        timestamp: 1584956630223,
        edges: [],
        nodes: [
          {
            nodeName: `sorttest`,
            algorithmName: `sorttest`,
            taskId: `sorttest:sorttest:4aeb81bf-7d3c-4e77-811f-4abdbf7e9ac5`,
            input: [
              [
                [
                  {
                    user: `fred`,
                    age: 48,
                  },
                  {
                    user: `barney`,
                    age: 34,
                  },
                  {
                    user: `fred`,
                    age: 40,
                  },
                  {
                    user: `barney`,
                    age: 36,
                  },
                ],
                [`user`, `age`],
              ],
            ],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:sorttest:741c23a1-5ae6-4d21-98c8-fc83e2d5606a/sorttest:sorttest:4aeb81bf-7d3c-4e77-811f-4abdbf7e9ac5`,
              },
            },
            podName: `sorttest-8517bfc5b64f5cc80070233ed9aee3-zzl7v`,
            status: `succeed`,
            startTime: 1584956630073,
            endTime: 1584956630138,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:sorttest:51de2c76-95b3-4245-b05b-2ecca4a06ced`,
      status: {
        timestamp: `2020-03-23T09:42:29.338Z`,
        jobId: `main:sorttest:51de2c76-95b3-4245-b05b-2ecca4a06ced`,
        status: `completed`,
        level: `info`,
        pipeline: `sorttest`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-23T09:42:30.152Z`,
        jobId: `main:sorttest:51de2c76-95b3-4245-b05b-2ecca4a06ced`,
        pipeline: `sorttest`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:sorttest:51de2c76-95b3-4245-b05b-2ecca4a06ced/result.json`,
          },
        },
        status: `completed`,
        timeTook: 0.893,
      },
      pipeline: {
        name: `sorttest`,
        nodes: [
          {
            nodeName: `sorttest`,
            algorithmName: `sorttest`,
            input: [
              [
                {
                  user: `fred`,
                  age: 48,
                },
                {
                  user: `barney`,
                  age: 34,
                },
                {
                  user: `fred`,
                  age: 40,
                },
                {
                  user: `barney`,
                  age: 36,
                },
              ],
              [`user`, `age`],
            ],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:sorttest:51de2c76-95b3-4245-b05b-2ecca4a06ced`,
        startTime: 1584956549259,
        lastRunResult: {
          timestamp: `2020-03-23T09:38:44.386Z`,
          status: `completed`,
          timeTook: 1.277,
        },
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:sorttest:51de2c76-95b3-4245-b05b-2ecca4a06ced`,
        timestamp: 1584956550187,
        edges: [],
        nodes: [
          {
            nodeName: `sorttest`,
            algorithmName: `sorttest`,
            taskId: `sorttest:sorttest:4f173c27-fe56-430e-b00c-0bddf288b1d9`,
            input: [
              [
                {
                  user: `fred`,
                  age: 48,
                },
                {
                  user: `barney`,
                  age: 34,
                },
                {
                  user: `fred`,
                  age: 40,
                },
                {
                  user: `barney`,
                  age: 36,
                },
              ],
              [`user`, `age`],
            ],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:sorttest:51de2c76-95b3-4245-b05b-2ecca4a06ced/sorttest:sorttest:4f173c27-fe56-430e-b00c-0bddf288b1d9`,
              },
            },
            podName: `sorttest-860d3f9c2228e6e93f75e2bea3bb47-mz8d4`,
            status: `succeed`,
            startTime: 1584956550053,
            endTime: 1584956550105,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:sorttest:55885028-0f65-44d5-9c48-16f040e04382`,
      status: {
        timestamp: `2020-03-23T09:38:43.183Z`,
        jobId: `main:sorttest:55885028-0f65-44d5-9c48-16f040e04382`,
        status: `completed`,
        level: `info`,
        pipeline: `sorttest`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-23T09:38:44.386Z`,
        jobId: `main:sorttest:55885028-0f65-44d5-9c48-16f040e04382`,
        pipeline: `sorttest`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:sorttest:55885028-0f65-44d5-9c48-16f040e04382/result.json`,
          },
        },
        status: `completed`,
        timeTook: 1.277,
      },
      pipeline: {
        name: `sorttest`,
        nodes: [
          {
            nodeName: `sorttest`,
            algorithmName: `sorttest`,
            input: [``],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:sorttest:55885028-0f65-44d5-9c48-16f040e04382`,
        startTime: 1584956323109,
        lastRunResult: {
          timestamp: `2020-03-23T09:37:24.082Z`,
          status: `completed`,
          timeTook: 0.786,
        },
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:sorttest:55885028-0f65-44d5-9c48-16f040e04382`,
        timestamp: 1584956324404,
        edges: [],
        nodes: [
          {
            nodeName: `sorttest`,
            algorithmName: `sorttest`,
            taskId: `sorttest:sorttest:43fb8394-187d-4aa7-a5c2-c0e893f9b4d5`,
            input: [``],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:sorttest:55885028-0f65-44d5-9c48-16f040e04382/sorttest:sorttest:43fb8394-187d-4aa7-a5c2-c0e893f9b4d5`,
              },
            },
            podName: `sorttest-860d3f9c2228e6e93f75e2bea3bb47-mz8d4`,
            status: `succeed`,
            startTime: 1584956324011,
            endTime: 1584956324321,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:sorttest:6527286f-dc2d-422c-86a5-41cb8696582c`,
      status: {
        timestamp: `2020-03-23T09:37:23.370Z`,
        jobId: `main:sorttest:6527286f-dc2d-422c-86a5-41cb8696582c`,
        status: `completed`,
        level: `info`,
        pipeline: `sorttest`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-23T09:37:24.082Z`,
        jobId: `main:sorttest:6527286f-dc2d-422c-86a5-41cb8696582c`,
        pipeline: `sorttest`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:sorttest:6527286f-dc2d-422c-86a5-41cb8696582c/result.json`,
          },
        },
        status: `completed`,
        timeTook: 0.786,
      },
      pipeline: {
        name: `sorttest`,
        nodes: [
          {
            nodeName: `sorttest`,
            algorithmName: `sorttest`,
            input: [``],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:sorttest:6527286f-dc2d-422c-86a5-41cb8696582c`,
        startTime: 1584956243296,
        lastRunResult: {
          timestamp: `2020-03-23T09:37:21.894Z`,
          status: `completed`,
          timeTook: 3.935,
        },
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:sorttest:6527286f-dc2d-422c-86a5-41cb8696582c`,
        timestamp: 1584956244121,
        edges: [],
        nodes: [
          {
            nodeName: `sorttest`,
            algorithmName: `sorttest`,
            taskId: `sorttest:sorttest:6c76d0f0-5236-4894-bbc7-2c57ea572a3e`,
            input: [``],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:sorttest:6527286f-dc2d-422c-86a5-41cb8696582c/sorttest:sorttest:6c76d0f0-5236-4894-bbc7-2c57ea572a3e`,
              },
            },
            podName: `sorttest-8517bfc5b64f5cc80070233ed9aee3-zzl7v`,
            status: `succeed`,
            startTime: 1584956243951,
            endTime: 1584956243999,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:sorttest:4b610c6b-6b1c-4186-8a7f-2ed9e2ee96e6`,
      status: {
        timestamp: `2020-03-23T09:37:18.085Z`,
        jobId: `main:sorttest:4b610c6b-6b1c-4186-8a7f-2ed9e2ee96e6`,
        status: `completed`,
        level: `info`,
        pipeline: `sorttest`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-23T09:37:21.894Z`,
        jobId: `main:sorttest:4b610c6b-6b1c-4186-8a7f-2ed9e2ee96e6`,
        pipeline: `sorttest`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:sorttest:4b610c6b-6b1c-4186-8a7f-2ed9e2ee96e6/result.json`,
          },
        },
        status: `completed`,
        timeTook: 3.935,
      },
      pipeline: {
        name: `sorttest`,
        nodes: [
          {
            nodeName: `sorttest`,
            algorithmName: `sorttest`,
            input: [``],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:sorttest:4b610c6b-6b1c-4186-8a7f-2ed9e2ee96e6`,
        startTime: 1584956237959,
        lastRunResult: null,
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:sorttest:4b610c6b-6b1c-4186-8a7f-2ed9e2ee96e6`,
        timestamp: 1584956241955,
        edges: [],
        nodes: [
          {
            nodeName: `sorttest`,
            algorithmName: `sorttest`,
            taskId: `sorttest:sorttest:1ed52068-1aff-4f81-b729-e89b7e27d81b`,
            input: [``],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:sorttest:4b610c6b-6b1c-4186-8a7f-2ed9e2ee96e6/sorttest:sorttest:1ed52068-1aff-4f81-b729-e89b7e27d81b`,
              },
            },
            podName: `sorttest-8517bfc5b64f5cc80070233ed9aee3-zzl7v`,
            status: `succeed`,
            startTime: 1584956241783,
            endTime: 1584956241838,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:sorttest:d283107e-4b4e-4139-b8d1-fa62b603bf9b`,
      status: {
        timestamp: `2020-03-23T09:37:01.785Z`,
        jobId: `main:sorttest:d283107e-4b4e-4139-b8d1-fa62b603bf9b`,
        status: `completed`,
        level: `info`,
        pipeline: `sorttest`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-23T09:37:21.713Z`,
        jobId: `main:sorttest:d283107e-4b4e-4139-b8d1-fa62b603bf9b`,
        pipeline: `sorttest`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:sorttest:d283107e-4b4e-4139-b8d1-fa62b603bf9b/result.json`,
          },
        },
        status: `completed`,
        timeTook: 20.04,
      },
      pipeline: {
        name: `sorttest`,
        nodes: [
          {
            nodeName: `sorttest`,
            algorithmName: `sorttest`,
            input: [],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:sorttest:d283107e-4b4e-4139-b8d1-fa62b603bf9b`,
        startTime: 1584956221673,
        lastRunResult: null,
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:sorttest:d283107e-4b4e-4139-b8d1-fa62b603bf9b`,
        timestamp: 1584956241751,
        edges: [],
        nodes: [
          {
            nodeName: `sorttest`,
            algorithmName: `sorttest`,
            taskId: `sorttest:sorttest:94997f16-0192-49b9-93bd-8bb810cfcb1d`,
            input: [],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:sorttest:d283107e-4b4e-4139-b8d1-fa62b603bf9b/sorttest:sorttest:94997f16-0192-49b9-93bd-8bb810cfcb1d`,
              },
            },
            podName: `sorttest-8517bfc5b64f5cc80070233ed9aee3-zzl7v`,
            status: `succeed`,
            startTime: 1584956241579,
            endTime: 1584956241655,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:egw3muew:42ee79e2-05ad-47f2-b830-a599927628ea`,
      status: {
        timestamp: `2020-03-22T12:26:45.667Z`,
        jobId: `main:egw3muew:42ee79e2-05ad-47f2-b830-a599927628ea`,
        status: `completed`,
        level: `info`,
        pipeline: `egw3muew`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-22T12:27:03.681Z`,
        jobId: `main:egw3muew:42ee79e2-05ad-47f2-b830-a599927628ea`,
        pipeline: `egw3muew`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:egw3muew:42ee79e2-05ad-47f2-b830-a599927628ea/result.json`,
          },
        },
        status: `completed`,
        timeTook: 18.1,
      },
      pipeline: {
        name: `egw3muew`,
        nodes: [
          {
            nodeName: `egw3muew`,
            algorithmName: `egw3muew`,
            input: [4],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:egw3muew:42ee79e2-05ad-47f2-b830-a599927628ea`,
        startTime: 1584880005581,
        lastRunResult: null,
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:egw3muew:42ee79e2-05ad-47f2-b830-a599927628ea`,
        timestamp: 1584880023726,
        edges: [],
        nodes: [
          {
            nodeName: `egw3muew`,
            algorithmName: `egw3muew`,
            taskId: `egw3muew:egw3muew:82c44a32-c880-4206-80fb-fe650bce999a`,
            input: [4],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:egw3muew:42ee79e2-05ad-47f2-b830-a599927628ea/egw3muew:egw3muew:82c44a32-c880-4206-80fb-fe650bce999a`,
              },
            },
            podName: `egw3muew-424e5de16dd7a01de35d305e793c9a-njss8`,
            status: `succeed`,
            startTime: 1584880019559,
            endTime: 1584880023633,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:5saxff3z:46f7767f-13d8-4dfa-ad80-df357625ec0d`,
      status: {
        timestamp: `2020-03-22T12:23:33.111Z`,
        jobId: `main:5saxff3z:46f7767f-13d8-4dfa-ad80-df357625ec0d`,
        status: `failed`,
        level: `error`,
        pipeline: `5saxff3z`,
        data: {
          progress: 100,
          details: `100% completed, 1 failed`,
          states: {
            failed: 1,
          },
        },
        error: `ModuleNotFoundError("No module named 'algorithm_unique_folder.main,py'")`,
        nodeName: `5saxff3z`,
      },
      results: {
        timestamp: `2020-03-22T12:23:59.793Z`,
        jobId: `main:5saxff3z:46f7767f-13d8-4dfa-ad80-df357625ec0d`,
        pipeline: `5saxff3z`,
        data: null,
        status: `failed`,
        error: `ModuleNotFoundError("No module named 'algorithm_unique_folder.main,py'")`,
        nodeName: `5saxff3z`,
        timeTook: 26.761,
      },
      pipeline: {
        name: `5saxff3z`,
        nodes: [
          {
            nodeName: `5saxff3z`,
            algorithmName: `5saxff3z`,
            input: [4],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:5saxff3z:46f7767f-13d8-4dfa-ad80-df357625ec0d`,
        startTime: 1584879813032,
        lastRunResult: null,
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:5saxff3z:46f7767f-13d8-4dfa-ad80-df357625ec0d`,
        timestamp: 1584879839843,
        edges: [],
        nodes: [
          {
            nodeName: `5saxff3z`,
            algorithmName: `5saxff3z`,
            taskId: `5saxff3z:5saxff3z:74b1baec-1c30-4766-bd9b-bc8d6b19c9ca`,
            input: [4],
            podName: `5saxff3z-f1d2d961642b189262a85aabbce278-dd6jv`,
            status: `failed`,
            error: `ModuleNotFoundError("No module named 'algorithm_unique_folder.main,py'")`,
            startTime: 1584879839745,
            endTime: 1584879839779,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7`,
      status: {
        timestamp: `2020-03-22T09:56:54.221Z`,
        jobId: `main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7`,
        status: `completed`,
        level: `info`,
        pipeline: `crazy`,
        data: {
          progress: 100,
          details: `100% completed, 15 succeed`,
          states: {
            succeed: 15,
          },
        },
      },
      results: {
        timestamp: `2020-03-22T09:56:57.100Z`,
        jobId: `main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7`,
        pipeline: `crazy`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/result.json`,
          },
        },
        status: `completed`,
        timeTook: 2.945,
      },
      pipeline: {
        flowInput: {
          metadata: {
            'flowInput.files.one': {
              type: `array`,
              size: 5,
            },
            'flowInput.files.two': {
              type: `array`,
              size: 5,
            },
          },
          storageInfo: {
            path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7`,
          },
        },
        name: `crazy`,
        nodes: [
          {
            nodeName: `one`,
            algorithmName: `eval-alg`,
            input: [`#@flowInput.files.one`],
          },
          {
            nodeName: `two`,
            algorithmName: `eval-alg`,
            input: [`#@flowInput.files.two`],
          },
          {
            nodeName: `three`,
            algorithmName: `eval-alg`,
            input: [`*@one`, `*@two`],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        flowInputOrig: {
          files: {
            one: [`links-1`, `links-2`, `links-3`, `links-4`, `links-5`],
            two: [`links-6`, `links-7`, `links-8`, `links-9`, `links-10`],
          },
        },
        jobId: `main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7`,
        startTime: 1584871014155,
        lastRunResult: {
          timestamp: `2020-03-22T09:56:46.641Z`,
          status: `completed`,
          timeTook: 2.029,
        },
        types: [`raw`],
      },
      graph: {
        jobId: `main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7`,
        timestamp: 1584871017131,
        edges: [
          {
            from: `one`,
            to: `three`,
            edges: [
              {
                type: `waitAny`,
              },
            ],
          },
          {
            from: `two`,
            to: `three`,
            edges: [
              {
                type: `waitAny`,
              },
            ],
          },
        ],
        nodes: [
          {
            nodeName: `one`,
            algorithmName: `eval-alg`,
            batch: [
              {
                taskId: `one:eval-alg:949548f4-4251-4c2b-8e3d-061082dc2e37`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7`,
                  },
                ],
                output: {
                  metadata: {
                    one: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/one:eval-alg:949548f4-4251-4c2b-8e3d-061082dc2e37`,
                  },
                },
                podName: `eval-alg-053cbbc3c1bbfa9e15bb64e52cfdf4-qh267`,
                status: `succeed`,
                batchIndex: 1,
                startTime: 1584871015794,
                endTime: 1584871015889,
              },
              {
                taskId: `one:eval-alg:cf04812b-aa6c-443a-8fd3-a8c902685a17`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7`,
                  },
                ],
                output: {
                  metadata: {
                    one: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/one:eval-alg:cf04812b-aa6c-443a-8fd3-a8c902685a17`,
                  },
                },
                podName: `eval-alg-ee6855665a1079c594658b02ad4e94-7fk9r`,
                status: `succeed`,
                batchIndex: 2,
                startTime: 1584871014948,
                endTime: 1584871014995,
              },
              {
                taskId: `one:eval-alg:e98be6c3-ddb0-43ad-86dd-0850efa999f4`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7`,
                  },
                ],
                output: {
                  metadata: {
                    one: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/one:eval-alg:e98be6c3-ddb0-43ad-86dd-0850efa999f4`,
                  },
                },
                podName: `eval-alg-5f456c51e690515398f3ca05bf1c6a-j22rd`,
                status: `succeed`,
                batchIndex: 3,
                startTime: 1584871015021,
                endTime: 1584871015062,
              },
              {
                taskId: `one:eval-alg:db3d8907-7f17-48ae-a847-017d61f8796b`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7`,
                  },
                ],
                output: {
                  metadata: {
                    one: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/one:eval-alg:db3d8907-7f17-48ae-a847-017d61f8796b`,
                  },
                },
                podName: `eval-alg-ab1c77639410d2912accfdc4c42d34-lxcct`,
                status: `succeed`,
                batchIndex: 4,
                startTime: 1584871016691,
                endTime: 1584871016828,
              },
              {
                taskId: `one:eval-alg:3e338d87-60db-401d-b812-1251847deae8`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7`,
                  },
                ],
                output: {
                  metadata: {
                    one: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/one:eval-alg:3e338d87-60db-401d-b812-1251847deae8`,
                  },
                },
                podName: `eval-alg-6ff4e8fd7db6f5b8a33619a788cf94-t64w6`,
                status: `succeed`,
                batchIndex: 5,
                startTime: 1584871015075,
                endTime: 1584871015109,
              },
            ],
            batchInfo: {
              idle: 0,
              completed: 5,
              errors: 0,
              running: 0,
              total: 5,
            },
            level: 0,
            boards: [],
          },
          {
            nodeName: `two`,
            algorithmName: `eval-alg`,
            batch: [
              {
                taskId: `two:eval-alg:d02bc62a-dfa3-4ee1-b925-94aba34a2e4e`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7`,
                  },
                ],
                output: {
                  metadata: {
                    two: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/two:eval-alg:d02bc62a-dfa3-4ee1-b925-94aba34a2e4e`,
                  },
                },
                podName: `eval-alg-6ff4e8fd7db6f5b8a33619a788cf94-t64w6`,
                status: `succeed`,
                batchIndex: 1,
                startTime: 1584871014967,
                endTime: 1584871015018,
              },
              {
                taskId: `two:eval-alg:707bef05-0742-4ead-993f-35fceb2cc4b2`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7`,
                  },
                ],
                output: {
                  metadata: {
                    two: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/two:eval-alg:707bef05-0742-4ead-993f-35fceb2cc4b2`,
                  },
                },
                podName: `eval-alg-0eb26dbe1267f726a41dbec68a5a24-vt7mz`,
                status: `succeed`,
                batchIndex: 2,
                startTime: 1584871015890,
                endTime: 1584871015984,
              },
              {
                taskId: `two:eval-alg:9b2ac148-d3c2-42b7-8f83-ceaf9ebfd787`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7`,
                  },
                ],
                output: {
                  metadata: {
                    two: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/two:eval-alg:9b2ac148-d3c2-42b7-8f83-ceaf9ebfd787`,
                  },
                },
                podName: `eval-alg-66a648008a5e97df5848fc12c92cbb-k8prv`,
                status: `succeed`,
                batchIndex: 3,
                startTime: 1584871014932,
                endTime: 1584871014980,
              },
              {
                taskId: `two:eval-alg:841baf41-8f61-4cf6-af35-58f4d4d8ac65`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7`,
                  },
                ],
                output: {
                  metadata: {
                    two: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/two:eval-alg:841baf41-8f61-4cf6-af35-58f4d4d8ac65`,
                  },
                },
                podName: `eval-alg-02c893cb08bc909d763b17af69a50e-cnm5q`,
                status: `succeed`,
                batchIndex: 4,
                startTime: 1584871016428,
                endTime: 1584871016500,
              },
              {
                taskId: `two:eval-alg:0611f508-5b8d-47ba-a79f-6498b5224bf9`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7`,
                  },
                ],
                output: {
                  metadata: {
                    two: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/two:eval-alg:0611f508-5b8d-47ba-a79f-6498b5224bf9`,
                  },
                },
                podName: `eval-alg-66a648008a5e97df5848fc12c92cbb-k8prv`,
                status: `succeed`,
                batchIndex: 5,
                startTime: 1584871015032,
                endTime: 1584871015088,
              },
            ],
            batchInfo: {
              idle: 0,
              completed: 5,
              errors: 0,
              running: 0,
              total: 5,
            },
            level: 0,
            boards: [],
          },
          {
            nodeName: `three`,
            algorithmName: `eval-alg`,
            batch: [
              {
                taskId: `three:eval-alg:2faaa04d-d714-45e2-b5b4-be0026624df8`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/one:eval-alg:e98be6c3-ddb0-43ad-86dd-0850efa999f4`,
                  },
                  {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/two:eval-alg:9b2ac148-d3c2-42b7-8f83-ceaf9ebfd787`,
                  },
                ],
                output: {
                  metadata: {},
                  storageInfo: {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/three:eval-alg:2faaa04d-d714-45e2-b5b4-be0026624df8`,
                  },
                },
                podName: `eval-alg-66a648008a5e97df5848fc12c92cbb-k8prv`,
                status: `succeed`,
                batchIndex: 3,
                startTime: 1584871015936,
                endTime: 1584871015997,
              },
              {
                taskId: `three:eval-alg:e8e69cc2-c430-458c-805f-501d3af3457a`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/one:eval-alg:3e338d87-60db-401d-b812-1251847deae8`,
                  },
                  {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/two:eval-alg:0611f508-5b8d-47ba-a79f-6498b5224bf9`,
                  },
                ],
                output: {
                  metadata: {},
                  storageInfo: {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/three:eval-alg:e8e69cc2-c430-458c-805f-501d3af3457a`,
                  },
                },
                podName: `eval-alg-5f456c51e690515398f3ca05bf1c6a-j22rd`,
                status: `succeed`,
                batchIndex: 5,
                startTime: 1584871015920,
                endTime: 1584871015964,
              },
              {
                taskId: `three:eval-alg:11a4f088-3642-4a8a-be75-339be634f1b1`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/one:eval-alg:949548f4-4251-4c2b-8e3d-061082dc2e37`,
                  },
                  {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/two:eval-alg:d02bc62a-dfa3-4ee1-b925-94aba34a2e4e`,
                  },
                ],
                output: {
                  metadata: {},
                  storageInfo: {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/three:eval-alg:11a4f088-3642-4a8a-be75-339be634f1b1`,
                  },
                },
                podName: `eval-alg-6ff4e8fd7db6f5b8a33619a788cf94-t64w6`,
                status: `succeed`,
                batchIndex: 1,
                startTime: 1584871016967,
                endTime: 1584871017026,
              },
              {
                taskId: `three:eval-alg:10ebb193-33c7-4d0a-a8f6-a0f4815fec36`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/one:eval-alg:cf04812b-aa6c-443a-8fd3-a8c902685a17`,
                  },
                  {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/two:eval-alg:707bef05-0742-4ead-993f-35fceb2cc4b2`,
                  },
                ],
                output: {
                  metadata: {},
                  storageInfo: {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/three:eval-alg:10ebb193-33c7-4d0a-a8f6-a0f4815fec36`,
                  },
                },
                podName: `eval-alg-ee6855665a1079c594658b02ad4e94-7fk9r`,
                status: `succeed`,
                batchIndex: 2,
                startTime: 1584871016948,
                endTime: 1584871017001,
              },
              {
                taskId: `three:eval-alg:fedc45c3-6814-4c5a-81d1-d7f0f5c10448`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/one:eval-alg:db3d8907-7f17-48ae-a847-017d61f8796b`,
                  },
                  {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/two:eval-alg:841baf41-8f61-4cf6-af35-58f4d4d8ac65`,
                  },
                ],
                output: {
                  metadata: {},
                  storageInfo: {
                    path: `pub-hkube/main:crazy:702b50c4-2353-4690-b1ce-a53ed85fc4f7/three:eval-alg:fedc45c3-6814-4c5a-81d1-d7f0f5c10448`,
                  },
                },
                podName: `eval-alg-053cbbc3c1bbfa9e15bb64e52cfdf4-qh267`,
                status: `succeed`,
                batchIndex: 4,
                startTime: 1584871016996,
                endTime: 1584871017042,
              },
            ],
            batchInfo: {
              idle: 0,
              completed: 5,
              errors: 0,
              running: 0,
              total: 5,
            },
            level: 1,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171`,
      status: {
        timestamp: `2020-03-22T09:56:44.778Z`,
        jobId: `main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171`,
        status: `completed`,
        level: `info`,
        pipeline: `crazy`,
        data: {
          progress: 100,
          details: `100% completed, 15 succeed`,
          states: {
            succeed: 15,
          },
        },
      },
      results: {
        timestamp: `2020-03-22T09:56:46.641Z`,
        jobId: `main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171`,
        pipeline: `crazy`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/result.json`,
          },
        },
        status: `completed`,
        timeTook: 2.029,
      },
      pipeline: {
        flowInput: {
          metadata: {
            'flowInput.files.one': {
              type: `array`,
              size: 5,
            },
            'flowInput.files.two': {
              type: `array`,
              size: 5,
            },
          },
          storageInfo: {
            path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171`,
          },
        },
        name: `crazy`,
        nodes: [
          {
            nodeName: `one`,
            algorithmName: `eval-alg`,
            input: [`#@flowInput.files.one`],
          },
          {
            nodeName: `two`,
            algorithmName: `eval-alg`,
            input: [`#@flowInput.files.two`],
          },
          {
            nodeName: `three`,
            algorithmName: `eval-alg`,
            input: [`*@one`, `*@two`],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        flowInputOrig: {
          files: {
            one: [`links-1`, `links-2`, `links-3`, `links-4`, `links-5`],
            two: [`links-6`, `links-7`, `links-8`, `links-9`, `links-10`],
          },
        },
        jobId: `main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171`,
        startTime: 1584871004612,
        lastRunResult: {
          timestamp: `2020-03-22T09:54:32.188Z`,
          status: `completed`,
          timeTook: 12.633,
        },
        types: [`raw`],
      },
      graph: {
        jobId: `main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171`,
        timestamp: 1584871006682,
        edges: [
          {
            from: `one`,
            to: `three`,
            edges: [
              {
                type: `waitAny`,
              },
            ],
          },
          {
            from: `two`,
            to: `three`,
            edges: [
              {
                type: `waitAny`,
              },
            ],
          },
        ],
        nodes: [
          {
            nodeName: `one`,
            algorithmName: `eval-alg`,
            batch: [
              {
                taskId: `one:eval-alg:37ccde99-a5b0-4ea5-89a2-b7fb2a4165b7`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171`,
                  },
                ],
                output: {
                  metadata: {
                    one: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/one:eval-alg:37ccde99-a5b0-4ea5-89a2-b7fb2a4165b7`,
                  },
                },
                podName: `eval-alg-ee6855665a1079c594658b02ad4e94-7fk9r`,
                status: `succeed`,
                batchIndex: 1,
                startTime: 1584871005923,
                endTime: 1584871005970,
              },
              {
                taskId: `one:eval-alg:eeb95baa-c856-4007-8ef3-fbccd708dabb`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171`,
                  },
                ],
                output: {
                  metadata: {
                    one: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/one:eval-alg:eeb95baa-c856-4007-8ef3-fbccd708dabb`,
                  },
                },
                podName: `eval-alg-66a648008a5e97df5848fc12c92cbb-k8prv`,
                status: `succeed`,
                batchIndex: 2,
                startTime: 1584871005971,
                endTime: 1584871006304,
              },
              {
                taskId: `one:eval-alg:03f9854d-4c4f-48a5-96c8-bf9ecbd51dfb`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171`,
                  },
                ],
                output: {
                  metadata: {
                    one: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/one:eval-alg:03f9854d-4c4f-48a5-96c8-bf9ecbd51dfb`,
                  },
                },
                podName: `eval-alg-ee6855665a1079c594658b02ad4e94-7fk9r`,
                status: `succeed`,
                batchIndex: 3,
                startTime: 1584871006028,
                endTime: 1584871006085,
              },
              {
                taskId: `one:eval-alg:956572fe-3a3f-48da-8a11-bac0c444041d`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171`,
                  },
                ],
                output: {
                  metadata: {
                    one: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/one:eval-alg:956572fe-3a3f-48da-8a11-bac0c444041d`,
                  },
                },
                podName: `eval-alg-5f456c51e690515398f3ca05bf1c6a-j22rd`,
                status: `succeed`,
                batchIndex: 4,
                startTime: 1584871006194,
                endTime: 1584871006259,
              },
              {
                taskId: `one:eval-alg:d683c3b1-9423-4b9b-90b8-1d4040007ed5`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171`,
                  },
                ],
                output: {
                  metadata: {
                    one: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/one:eval-alg:d683c3b1-9423-4b9b-90b8-1d4040007ed5`,
                  },
                },
                podName: `eval-alg-ee6855665a1079c594658b02ad4e94-7fk9r`,
                status: `succeed`,
                batchIndex: 5,
                startTime: 1584871006225,
                endTime: 1584871006269,
              },
            ],
            batchInfo: {
              idle: 0,
              completed: 5,
              errors: 0,
              running: 0,
              total: 5,
            },
            level: 0,
            boards: [],
          },
          {
            nodeName: `two`,
            algorithmName: `eval-alg`,
            batch: [
              {
                taskId: `two:eval-alg:57b1e564-f8e9-42b4-975c-1d1473886391`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171`,
                  },
                ],
                output: {
                  metadata: {
                    two: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/two:eval-alg:57b1e564-f8e9-42b4-975c-1d1473886391`,
                  },
                },
                podName: `eval-alg-6ff4e8fd7db6f5b8a33619a788cf94-t64w6`,
                status: `succeed`,
                batchIndex: 1,
                startTime: 1584871005953,
                endTime: 1584871005998,
              },
              {
                taskId: `two:eval-alg:5402f42c-3b42-4555-aa88-c4608d1bddc4`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171`,
                  },
                ],
                output: {
                  metadata: {
                    two: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/two:eval-alg:5402f42c-3b42-4555-aa88-c4608d1bddc4`,
                  },
                },
                podName: `eval-alg-5f456c51e690515398f3ca05bf1c6a-j22rd`,
                status: `succeed`,
                batchIndex: 2,
                startTime: 1584871005994,
                endTime: 1584871006081,
              },
              {
                taskId: `two:eval-alg:e1128b86-0aa0-493f-a2bc-7d66290122b9`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171`,
                  },
                ],
                output: {
                  metadata: {
                    two: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/two:eval-alg:e1128b86-0aa0-493f-a2bc-7d66290122b9`,
                  },
                },
                podName: `eval-alg-6ff4e8fd7db6f5b8a33619a788cf94-t64w6`,
                status: `succeed`,
                batchIndex: 3,
                startTime: 1584871006046,
                endTime: 1584871006096,
              },
              {
                taskId: `two:eval-alg:e76eb41f-876f-496f-b470-aebc716c478e`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171`,
                  },
                ],
                output: {
                  metadata: {
                    two: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/two:eval-alg:e76eb41f-876f-496f-b470-aebc716c478e`,
                  },
                },
                podName: `eval-alg-6ff4e8fd7db6f5b8a33619a788cf94-t64w6`,
                status: `succeed`,
                batchIndex: 4,
                startTime: 1584871006140,
                endTime: 1584871006182,
              },
              {
                taskId: `two:eval-alg:6977b8bd-35fc-499c-8f01-3b35f87bee96`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171`,
                  },
                ],
                output: {
                  metadata: {
                    two: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/two:eval-alg:6977b8bd-35fc-499c-8f01-3b35f87bee96`,
                  },
                },
                podName: `eval-alg-6ff4e8fd7db6f5b8a33619a788cf94-t64w6`,
                status: `succeed`,
                batchIndex: 5,
                startTime: 1584871006242,
                endTime: 1584871006281,
              },
            ],
            batchInfo: {
              idle: 0,
              completed: 5,
              errors: 0,
              running: 0,
              total: 5,
            },
            level: 0,
            boards: [],
          },
          {
            nodeName: `three`,
            algorithmName: `eval-alg`,
            batch: [
              {
                taskId: `three:eval-alg:b742ec1c-1a6d-4304-88f8-9fe4e7a309b1`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/one:eval-alg:37ccde99-a5b0-4ea5-89a2-b7fb2a4165b7`,
                  },
                  {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/two:eval-alg:57b1e564-f8e9-42b4-975c-1d1473886391`,
                  },
                ],
                output: {
                  metadata: {},
                  storageInfo: {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/three:eval-alg:b742ec1c-1a6d-4304-88f8-9fe4e7a309b1`,
                  },
                },
                podName: `eval-alg-5f456c51e690515398f3ca05bf1c6a-j22rd`,
                status: `succeed`,
                batchIndex: 1,
                startTime: 1584871006420,
                endTime: 1584871006464,
              },
              {
                taskId: `three:eval-alg:cbbd9117-c794-42f3-8f4b-6e446e57e499`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/one:eval-alg:03f9854d-4c4f-48a5-96c8-bf9ecbd51dfb`,
                  },
                  {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/two:eval-alg:e1128b86-0aa0-493f-a2bc-7d66290122b9`,
                  },
                ],
                output: {
                  metadata: {},
                  storageInfo: {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/three:eval-alg:cbbd9117-c794-42f3-8f4b-6e446e57e499`,
                  },
                },
                podName: `eval-alg-6ff4e8fd7db6f5b8a33619a788cf94-t64w6`,
                status: `succeed`,
                batchIndex: 3,
                startTime: 1584871006346,
                endTime: 1584871006389,
              },
              {
                taskId: `three:eval-alg:149b49db-98da-4257-a1ab-586d97df35a3`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/one:eval-alg:956572fe-3a3f-48da-8a11-bac0c444041d`,
                  },
                  {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/two:eval-alg:e76eb41f-876f-496f-b470-aebc716c478e`,
                  },
                ],
                output: {
                  metadata: {},
                  storageInfo: {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/three:eval-alg:149b49db-98da-4257-a1ab-586d97df35a3`,
                  },
                },
                podName: `eval-alg-ee6855665a1079c594658b02ad4e94-7fk9r`,
                status: `succeed`,
                batchIndex: 4,
                startTime: 1584871006466,
                endTime: 1584871006533,
              },
              {
                taskId: `three:eval-alg:4e2209ed-12e3-49be-95ec-44a73f577b2f`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/one:eval-alg:d683c3b1-9423-4b9b-90b8-1d4040007ed5`,
                  },
                  {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/two:eval-alg:6977b8bd-35fc-499c-8f01-3b35f87bee96`,
                  },
                ],
                output: {
                  metadata: {},
                  storageInfo: {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/three:eval-alg:4e2209ed-12e3-49be-95ec-44a73f577b2f`,
                  },
                },
                podName: `eval-alg-6ff4e8fd7db6f5b8a33619a788cf94-t64w6`,
                status: `succeed`,
                batchIndex: 5,
                startTime: 1584871006464,
                endTime: 1584871006511,
              },
              {
                taskId: `three:eval-alg:5bef2913-d4f8-414c-afdf-0be1fe4dcb80`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/one:eval-alg:eeb95baa-c856-4007-8ef3-fbccd708dabb`,
                  },
                  {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/two:eval-alg:5402f42c-3b42-4555-aa88-c4608d1bddc4`,
                  },
                ],
                output: {
                  metadata: {},
                  storageInfo: {
                    path: `pub-hkube/main:crazy:0a2fea40-628c-445d-9a9c-50b7751f2171/three:eval-alg:5bef2913-d4f8-414c-afdf-0be1fe4dcb80`,
                  },
                },
                podName: `eval-alg-66a648008a5e97df5848fc12c92cbb-k8prv`,
                status: `succeed`,
                batchIndex: 2,
                startTime: 1584871006527,
                endTime: 1584871006582,
              },
            ],
            batchInfo: {
              idle: 0,
              completed: 5,
              errors: 0,
              running: 0,
              total: 5,
            },
            level: 1,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2`,
      status: {
        timestamp: `2020-03-22T09:54:19.689Z`,
        jobId: `main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2`,
        status: `completed`,
        level: `info`,
        pipeline: `crazy`,
        data: {
          progress: 100,
          details: `100% completed, 15 succeed`,
          states: {
            succeed: 15,
          },
        },
      },
      results: {
        timestamp: `2020-03-22T09:54:32.188Z`,
        jobId: `main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2`,
        pipeline: `crazy`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/result.json`,
          },
        },
        status: `completed`,
        timeTook: 12.633,
      },
      pipeline: {
        name: `crazy`,
        nodes: [
          {
            nodeName: `one`,
            algorithmName: `eval-alg`,
            input: [`#@flowInput.files.one`],
          },
          {
            nodeName: `two`,
            algorithmName: `eval-alg`,
            input: [`#@flowInput.files.two`],
          },
          {
            nodeName: `three`,
            algorithmName: `eval-alg`,
            input: [`*@one`, `*@two`],
          },
        ],
        flowInput: {
          metadata: {
            'flowInput.files.one': {
              type: `array`,
              size: 5,
            },
            'flowInput.files.two': {
              type: `array`,
              size: 5,
            },
          },
          storageInfo: {
            path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2`,
          },
        },
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        flowInputOrig: {
          files: {
            one: [`links-1`, `links-2`, `links-3`, `links-4`, `links-5`],
            two: [`links-6`, `links-7`, `links-8`, `links-9`, `links-10`],
          },
        },
        jobId: `main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2`,
        startTime: 1584870859555,
        lastRunResult: null,
        types: [`raw`],
      },
      graph: {
        jobId: `main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2`,
        timestamp: 1584870872240,
        edges: [
          {
            from: `one`,
            to: `three`,
            edges: [
              {
                type: `waitAny`,
              },
            ],
          },
          {
            from: `two`,
            to: `three`,
            edges: [
              {
                type: `waitAny`,
              },
            ],
          },
        ],
        nodes: [
          {
            nodeName: `one`,
            algorithmName: `eval-alg`,
            batch: [
              {
                taskId: `one:eval-alg:f4f629db-a6ba-402e-9a26-57bdbbb8bc6a`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2`,
                  },
                ],
                output: {
                  metadata: {
                    one: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/one:eval-alg:f4f629db-a6ba-402e-9a26-57bdbbb8bc6a`,
                  },
                },
                podName: `eval-alg-ee6855665a1079c594658b02ad4e94-7fk9r`,
                status: `succeed`,
                batchIndex: 1,
                startTime: 1584870870552,
                endTime: 1584870870649,
              },
              {
                taskId: `one:eval-alg:3387a070-e34d-4be5-a77b-f5f5a73ee3d7`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2`,
                  },
                ],
                output: {
                  metadata: {
                    one: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/one:eval-alg:3387a070-e34d-4be5-a77b-f5f5a73ee3d7`,
                  },
                },
                podName: `eval-alg-6ff4e8fd7db6f5b8a33619a788cf94-t64w6`,
                status: `succeed`,
                batchIndex: 2,
                startTime: 1584870870866,
                endTime: 1584870870902,
              },
              {
                taskId: `one:eval-alg:86216ce8-60b3-4f59-84f0-c40236d78cfe`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2`,
                  },
                ],
                output: {
                  metadata: {
                    one: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/one:eval-alg:86216ce8-60b3-4f59-84f0-c40236d78cfe`,
                  },
                },
                podName: `eval-alg-6ff4e8fd7db6f5b8a33619a788cf94-t64w6`,
                status: `succeed`,
                batchIndex: 3,
                startTime: 1584870870968,
                endTime: 1584870871016,
              },
              {
                taskId: `one:eval-alg:3d74d235-96c5-4189-b76b-12b236b38685`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2`,
                  },
                ],
                output: {
                  metadata: {
                    one: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/one:eval-alg:3d74d235-96c5-4189-b76b-12b236b38685`,
                  },
                },
                podName: `eval-alg-6ff4e8fd7db6f5b8a33619a788cf94-t64w6`,
                status: `succeed`,
                batchIndex: 4,
                startTime: 1584870871306,
                endTime: 1584870871357,
              },
              {
                taskId: `one:eval-alg:6f42d553-421d-4d59-977a-002fe8ec60bd`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2`,
                  },
                ],
                output: {
                  metadata: {
                    one: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/one:eval-alg:6f42d553-421d-4d59-977a-002fe8ec60bd`,
                  },
                },
                podName: `eval-alg-6ff4e8fd7db6f5b8a33619a788cf94-t64w6`,
                status: `succeed`,
                batchIndex: 5,
                startTime: 1584870871470,
                endTime: 1584870871513,
              },
            ],
            batchInfo: {
              idle: 0,
              completed: 5,
              errors: 0,
              running: 0,
              total: 5,
            },
            level: 0,
            boards: [],
          },
          {
            nodeName: `two`,
            algorithmName: `eval-alg`,
            batch: [
              {
                taskId: `two:eval-alg:093d28ee-0935-4e35-8f78-45820d622b22`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2`,
                  },
                ],
                output: {
                  metadata: {
                    two: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/two:eval-alg:093d28ee-0935-4e35-8f78-45820d622b22`,
                  },
                },
                podName: `eval-alg-6ff4e8fd7db6f5b8a33619a788cf94-t64w6`,
                status: `succeed`,
                batchIndex: 1,
                startTime: 1584870870468,
                endTime: 1584870870534,
              },
              {
                taskId: `two:eval-alg:3400cec2-3e57-42c7-bbfb-1435831289c5`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2`,
                  },
                ],
                output: {
                  metadata: {
                    two: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/two:eval-alg:3400cec2-3e57-42c7-bbfb-1435831289c5`,
                  },
                },
                podName: `eval-alg-6ff4e8fd7db6f5b8a33619a788cf94-t64w6`,
                status: `succeed`,
                batchIndex: 2,
                startTime: 1584870870665,
                endTime: 1584870870735,
              },
              {
                taskId: `two:eval-alg:0c8a4d0b-f93f-4b1b-84a6-12b3a26e071b`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2`,
                  },
                ],
                output: {
                  metadata: {
                    two: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/two:eval-alg:0c8a4d0b-f93f-4b1b-84a6-12b3a26e071b`,
                  },
                },
                podName: `eval-alg-ee6855665a1079c594658b02ad4e94-7fk9r`,
                status: `succeed`,
                batchIndex: 3,
                startTime: 1584870870961,
                endTime: 1584870871006,
              },
              {
                taskId: `two:eval-alg:955bea6d-3d62-4f81-a276-b9997f6acb14`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2`,
                  },
                ],
                output: {
                  metadata: {
                    two: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/two:eval-alg:955bea6d-3d62-4f81-a276-b9997f6acb14`,
                  },
                },
                podName: `eval-alg-6ff4e8fd7db6f5b8a33619a788cf94-t64w6`,
                status: `succeed`,
                batchIndex: 4,
                startTime: 1584870871066,
                endTime: 1584870871153,
              },
              {
                taskId: `two:eval-alg:fb0076f3-9eb3-498f-89e4-95a386025bd7`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2`,
                  },
                ],
                output: {
                  metadata: {
                    two: {
                      type: `array`,
                      size: 1,
                    },
                  },
                  storageInfo: {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/two:eval-alg:fb0076f3-9eb3-498f-89e4-95a386025bd7`,
                  },
                },
                podName: `eval-alg-ee6855665a1079c594658b02ad4e94-7fk9r`,
                status: `succeed`,
                batchIndex: 5,
                startTime: 1584870871402,
                endTime: 1584870871502,
              },
            ],
            batchInfo: {
              idle: 0,
              completed: 5,
              errors: 0,
              running: 0,
              total: 5,
            },
            level: 0,
            boards: [],
          },
          {
            nodeName: `three`,
            algorithmName: `eval-alg`,
            batch: [
              {
                taskId: `three:eval-alg:6b0b648f-20b1-44ef-bbbc-1a5363efde3a`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/one:eval-alg:f4f629db-a6ba-402e-9a26-57bdbbb8bc6a`,
                  },
                  {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/two:eval-alg:093d28ee-0935-4e35-8f78-45820d622b22`,
                  },
                ],
                output: {
                  metadata: {},
                  storageInfo: {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/three:eval-alg:6b0b648f-20b1-44ef-bbbc-1a5363efde3a`,
                  },
                },
                podName: `eval-alg-6ff4e8fd7db6f5b8a33619a788cf94-t64w6`,
                status: `succeed`,
                batchIndex: 1,
                startTime: 1584870871568,
                endTime: 1584870871611,
              },
              {
                taskId: `three:eval-alg:f656a05e-d459-4450-8048-d1fce87fc8d5`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/one:eval-alg:3387a070-e34d-4be5-a77b-f5f5a73ee3d7`,
                  },
                  {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/two:eval-alg:3400cec2-3e57-42c7-bbfb-1435831289c5`,
                  },
                ],
                output: {
                  metadata: {},
                  storageInfo: {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/three:eval-alg:f656a05e-d459-4450-8048-d1fce87fc8d5`,
                  },
                },
                podName: `eval-alg-6ff4e8fd7db6f5b8a33619a788cf94-t64w6`,
                status: `succeed`,
                batchIndex: 2,
                startTime: 1584870871673,
                endTime: 1584870871710,
              },
              {
                taskId: `three:eval-alg:3390dd8b-1105-4c01-8c40-80fbd26f849a`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/one:eval-alg:86216ce8-60b3-4f59-84f0-c40236d78cfe`,
                  },
                  {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/two:eval-alg:0c8a4d0b-f93f-4b1b-84a6-12b3a26e071b`,
                  },
                ],
                output: {
                  metadata: {},
                  storageInfo: {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/three:eval-alg:3390dd8b-1105-4c01-8c40-80fbd26f849a`,
                  },
                },
                podName: `eval-alg-6ff4e8fd7db6f5b8a33619a788cf94-t64w6`,
                status: `succeed`,
                batchIndex: 3,
                startTime: 1584870871775,
                endTime: 1584870871818,
              },
              {
                taskId: `three:eval-alg:c30ab8d0-e744-49f3-b53e-c2c162afe1fc`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/one:eval-alg:3d74d235-96c5-4189-b76b-12b236b38685`,
                  },
                  {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/two:eval-alg:955bea6d-3d62-4f81-a276-b9997f6acb14`,
                  },
                ],
                output: {
                  metadata: {},
                  storageInfo: {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/three:eval-alg:c30ab8d0-e744-49f3-b53e-c2c162afe1fc`,
                  },
                },
                podName: `eval-alg-ee6855665a1079c594658b02ad4e94-7fk9r`,
                status: `succeed`,
                batchIndex: 4,
                startTime: 1584870871826,
                endTime: 1584870871947,
              },
              {
                taskId: `three:eval-alg:42d91b65-c39a-4d47-a7c5-4c42f45c98f3`,
                input: [
                  {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/one:eval-alg:6f42d553-421d-4d59-977a-002fe8ec60bd`,
                  },
                  {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/two:eval-alg:fb0076f3-9eb3-498f-89e4-95a386025bd7`,
                  },
                ],
                output: {
                  metadata: {},
                  storageInfo: {
                    path: `pub-hkube/main:crazy:492a7d23-1e87-4a10-8fbd-4f711c6f74c2/three:eval-alg:42d91b65-c39a-4d47-a7c5-4c42f45c98f3`,
                  },
                },
                podName: `eval-alg-6ff4e8fd7db6f5b8a33619a788cf94-t64w6`,
                status: `succeed`,
                batchIndex: 5,
                startTime: 1584870871974,
                endTime: 1584870872031,
              },
            ],
            batchInfo: {
              idle: 0,
              completed: 5,
              errors: 0,
              running: 0,
              total: 5,
            },
            level: 1,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:39zrgd9m:63680995-8532-4247-9c11-e6a23355ae8f`,
      status: {
        timestamp: `2020-03-22T09:37:51.004Z`,
        jobId: `main:39zrgd9m:63680995-8532-4247-9c11-e6a23355ae8f`,
        status: `completed`,
        level: `info`,
        pipeline: `39zrgd9m`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-22T09:38:27.495Z`,
        jobId: `main:39zrgd9m:63680995-8532-4247-9c11-e6a23355ae8f`,
        pipeline: `39zrgd9m`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:39zrgd9m:63680995-8532-4247-9c11-e6a23355ae8f/result.json`,
          },
        },
        status: `completed`,
        timeTook: 36.581,
      },
      pipeline: {
        name: `39zrgd9m`,
        nodes: [
          {
            nodeName: `39zrgd9m`,
            algorithmName: `39zrgd9m`,
            input: [4],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:39zrgd9m:63680995-8532-4247-9c11-e6a23355ae8f`,
        startTime: 1584869870914,
        lastRunResult: null,
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:39zrgd9m:63680995-8532-4247-9c11-e6a23355ae8f`,
        timestamp: 1584869907526,
        edges: [],
        nodes: [
          {
            nodeName: `39zrgd9m`,
            algorithmName: `39zrgd9m`,
            taskId: `39zrgd9m:39zrgd9m:9ea89a3d-ce47-41fa-b61e-a844e198a25b`,
            input: [4],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:39zrgd9m:63680995-8532-4247-9c11-e6a23355ae8f/39zrgd9m:39zrgd9m:9ea89a3d-ce47-41fa-b61e-a844e198a25b`,
              },
            },
            podName: `39zrgd9m-e9bd5c2d89453be9cdfb035ddcdea9-dcz68`,
            status: `succeed`,
            startTime: 1584869903382,
            endTime: 1584869907445,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:un9clcan:d2cb3e70-555e-40ab-adc7-6654e8d8c1b8`,
      status: {
        timestamp: `2020-03-22T09:35:39.879Z`,
        jobId: `main:un9clcan:d2cb3e70-555e-40ab-adc7-6654e8d8c1b8`,
        status: `completed`,
        level: `info`,
        pipeline: `un9clcan`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-22T09:36:09.542Z`,
        jobId: `main:un9clcan:d2cb3e70-555e-40ab-adc7-6654e8d8c1b8`,
        pipeline: `un9clcan`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:un9clcan:d2cb3e70-555e-40ab-adc7-6654e8d8c1b8/result.json`,
          },
        },
        status: `completed`,
        timeTook: 29.73,
      },
      pipeline: {
        name: `un9clcan`,
        nodes: [
          {
            nodeName: `un9clcan`,
            algorithmName: `un9clcan`,
            input: [4],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:un9clcan:d2cb3e70-555e-40ab-adc7-6654e8d8c1b8`,
        startTime: 1584869739812,
        lastRunResult: null,
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:un9clcan:d2cb3e70-555e-40ab-adc7-6654e8d8c1b8`,
        timestamp: 1584869769559,
        edges: [],
        nodes: [
          {
            nodeName: `un9clcan`,
            algorithmName: `un9clcan`,
            taskId: `un9clcan:un9clcan:c314a54e-711f-47fa-a8c1-63b1501b83e2`,
            input: [4],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:un9clcan:d2cb3e70-555e-40ab-adc7-6654e8d8c1b8/un9clcan:un9clcan:c314a54e-711f-47fa-a8c1-63b1501b83e2`,
              },
            },
            podName: `un9clcan-eb9665f42c743f5f31104fd13c9cd2-77vks`,
            status: `succeed`,
            startTime: 1584869765402,
            endTime: 1584869769487,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:cvaycu9z:c843a269-9a94-4ca7-afdd-0d02d1ae4caa`,
      status: {
        timestamp: `2020-03-22T09:32:38.430Z`,
        jobId: `main:cvaycu9z:c843a269-9a94-4ca7-afdd-0d02d1ae4caa`,
        status: `completed`,
        level: `info`,
        pipeline: `cvaycu9z`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-22T09:33:06.195Z`,
        jobId: `main:cvaycu9z:c843a269-9a94-4ca7-afdd-0d02d1ae4caa`,
        pipeline: `cvaycu9z`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:cvaycu9z:c843a269-9a94-4ca7-afdd-0d02d1ae4caa/result.json`,
          },
        },
        status: `completed`,
        timeTook: 27.834,
      },
      pipeline: {
        name: `cvaycu9z`,
        nodes: [
          {
            nodeName: `cvaycu9z`,
            algorithmName: `cvaycu9z`,
            input: [4],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:cvaycu9z:c843a269-9a94-4ca7-afdd-0d02d1ae4caa`,
        startTime: 1584869558361,
        lastRunResult: null,
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:cvaycu9z:c843a269-9a94-4ca7-afdd-0d02d1ae4caa`,
        timestamp: 1584869586234,
        edges: [],
        nodes: [
          {
            nodeName: `cvaycu9z`,
            algorithmName: `cvaycu9z`,
            taskId: `cvaycu9z:cvaycu9z:ff64c112-63cd-43cf-a3a6-3768a36cf7b0`,
            input: [4],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:cvaycu9z:c843a269-9a94-4ca7-afdd-0d02d1ae4caa/cvaycu9z:cvaycu9z:ff64c112-63cd-43cf-a3a6-3768a36cf7b0`,
              },
            },
            podName: `cvaycu9z-8bec800b379b90d95a724e65e9f084-tg7tm`,
            status: `succeed`,
            startTime: 1584869582074,
            endTime: 1584869586146,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:dd16hiyq:25149207-84d3-4dc3-937b-58d57ddbf54d`,
      status: {
        timestamp: `2020-03-22T09:29:30.825Z`,
        jobId: `main:dd16hiyq:25149207-84d3-4dc3-937b-58d57ddbf54d`,
        status: `completed`,
        level: `info`,
        pipeline: `dd16hiyq`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-22T09:29:52.235Z`,
        jobId: `main:dd16hiyq:25149207-84d3-4dc3-937b-58d57ddbf54d`,
        pipeline: `dd16hiyq`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:dd16hiyq:25149207-84d3-4dc3-937b-58d57ddbf54d/result.json`,
          },
        },
        status: `completed`,
        timeTook: 21.496,
      },
      pipeline: {
        name: `dd16hiyq`,
        nodes: [
          {
            nodeName: `dd16hiyq`,
            algorithmName: `dd16hiyq`,
            input: [4],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:dd16hiyq:25149207-84d3-4dc3-937b-58d57ddbf54d`,
        startTime: 1584869370739,
        lastRunResult: null,
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:dd16hiyq:25149207-84d3-4dc3-937b-58d57ddbf54d`,
        timestamp: 1584869392261,
        edges: [],
        nodes: [
          {
            nodeName: `dd16hiyq`,
            algorithmName: `dd16hiyq`,
            taskId: `dd16hiyq:dd16hiyq:84466ca7-9558-43e2-99c0-8d4f8eb7d64b`,
            input: [4],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:dd16hiyq:25149207-84d3-4dc3-937b-58d57ddbf54d/dd16hiyq:dd16hiyq:84466ca7-9558-43e2-99c0-8d4f8eb7d64b`,
              },
            },
            podName: `dd16hiyq-16722730638c84d3ae02c62ce0a74c-jlwfg`,
            status: `succeed`,
            startTime: 1584869388124,
            endTime: 1584869392189,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:daw7ruj4:30b7739f-90d2-4df3-9b1b-21c0b7b46316`,
      status: {
        timestamp: `2020-03-22T09:25:16.191Z`,
        jobId: `main:daw7ruj4:30b7739f-90d2-4df3-9b1b-21c0b7b46316`,
        status: `completed`,
        level: `info`,
        pipeline: `daw7ruj4`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-22T09:25:37.593Z`,
        jobId: `main:daw7ruj4:30b7739f-90d2-4df3-9b1b-21c0b7b46316`,
        pipeline: `daw7ruj4`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:daw7ruj4:30b7739f-90d2-4df3-9b1b-21c0b7b46316/result.json`,
          },
        },
        status: `completed`,
        timeTook: 21.474,
      },
      pipeline: {
        name: `daw7ruj4`,
        nodes: [
          {
            nodeName: `daw7ruj4`,
            algorithmName: `daw7ruj4`,
            input: [4],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:daw7ruj4:30b7739f-90d2-4df3-9b1b-21c0b7b46316`,
        startTime: 1584869116119,
        lastRunResult: null,
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:daw7ruj4:30b7739f-90d2-4df3-9b1b-21c0b7b46316`,
        timestamp: 1584869137622,
        edges: [],
        nodes: [
          {
            nodeName: `daw7ruj4`,
            algorithmName: `daw7ruj4`,
            taskId: `daw7ruj4:daw7ruj4:4fcc8c03-053b-4b82-9606-460c2999d701`,
            input: [4],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:daw7ruj4:30b7739f-90d2-4df3-9b1b-21c0b7b46316/daw7ruj4:daw7ruj4:4fcc8c03-053b-4b82-9606-460c2999d701`,
              },
            },
            podName: `daw7ruj4-6367c753fa502aeae7c74cf6c7e1df-4qz28`,
            status: `succeed`,
            startTime: 1584869133425,
            endTime: 1584869137509,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:adjhh03b:605ec078-3c0d-4acf-b5c6-f0e3aa09f5a2`,
      status: {
        timestamp: `2020-03-22T09:14:33.835Z`,
        jobId: `main:adjhh03b:605ec078-3c0d-4acf-b5c6-f0e3aa09f5a2`,
        status: `completed`,
        level: `info`,
        pipeline: `adjhh03b`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-22T09:15:05.551Z`,
        jobId: `main:adjhh03b:605ec078-3c0d-4acf-b5c6-f0e3aa09f5a2`,
        pipeline: `adjhh03b`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:adjhh03b:605ec078-3c0d-4acf-b5c6-f0e3aa09f5a2/result.json`,
          },
        },
        status: `completed`,
        timeTook: 31.817,
      },
      pipeline: {
        name: `adjhh03b`,
        nodes: [
          {
            nodeName: `adjhh03b`,
            algorithmName: `adjhh03b`,
            input: [4],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:adjhh03b:605ec078-3c0d-4acf-b5c6-f0e3aa09f5a2`,
        startTime: 1584868473734,
        lastRunResult: null,
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:adjhh03b:605ec078-3c0d-4acf-b5c6-f0e3aa09f5a2`,
        timestamp: 1584868505570,
        edges: [],
        nodes: [
          {
            nodeName: `adjhh03b`,
            algorithmName: `adjhh03b`,
            taskId: `adjhh03b:adjhh03b:504fcee4-cf8a-422c-8a01-ad785fc4038b`,
            input: [4],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:adjhh03b:605ec078-3c0d-4acf-b5c6-f0e3aa09f5a2/adjhh03b:adjhh03b:504fcee4-cf8a-422c-8a01-ad785fc4038b`,
              },
            },
            podName: `adjhh03b-7413debded3d428a65d0d23dbafd8e-p87lw`,
            status: `succeed`,
            startTime: 1584868501436,
            endTime: 1584868505499,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:maupybvt:a6b22fcf-f963-4223-9782-3a11edb6aff2`,
      status: {
        timestamp: `2020-03-22T09:01:09.659Z`,
        jobId: `main:maupybvt:a6b22fcf-f963-4223-9782-3a11edb6aff2`,
        status: `completed`,
        level: `info`,
        pipeline: `maupybvt`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-22T09:01:31.620Z`,
        jobId: `main:maupybvt:a6b22fcf-f963-4223-9782-3a11edb6aff2`,
        pipeline: `maupybvt`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:maupybvt:a6b22fcf-f963-4223-9782-3a11edb6aff2/result.json`,
          },
        },
        status: `completed`,
        timeTook: 22.036,
      },
      pipeline: {
        name: `maupybvt`,
        nodes: [
          {
            nodeName: `maupybvt`,
            algorithmName: `maupybvt`,
            input: [4],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:maupybvt:a6b22fcf-f963-4223-9782-3a11edb6aff2`,
        startTime: 1584867669584,
        lastRunResult: null,
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:maupybvt:a6b22fcf-f963-4223-9782-3a11edb6aff2`,
        timestamp: 1584867691641,
        edges: [],
        nodes: [
          {
            nodeName: `maupybvt`,
            algorithmName: `maupybvt`,
            taskId: `maupybvt:maupybvt:a4c892a2-9a9d-4d10-a8c2-a005dd7d83a1`,
            input: [4],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:maupybvt:a6b22fcf-f963-4223-9782-3a11edb6aff2/maupybvt:maupybvt:a4c892a2-9a9d-4d10-a8c2-a005dd7d83a1`,
              },
            },
            podName: `maupybvt-14a39a6f465c6925fb6a216487de32-rwgnq`,
            status: `succeed`,
            startTime: 1584867687452,
            endTime: 1584867691553,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:fzylk0g4:395b8da9-e6a6-4368-a791-5dcfbc6a290e`,
      status: {
        timestamp: `2020-03-22T08:54:56.409Z`,
        jobId: `main:fzylk0g4:395b8da9-e6a6-4368-a791-5dcfbc6a290e`,
        status: `completed`,
        level: `info`,
        pipeline: `fzylk0g4`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-22T08:55:31.539Z`,
        jobId: `main:fzylk0g4:395b8da9-e6a6-4368-a791-5dcfbc6a290e`,
        pipeline: `fzylk0g4`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:fzylk0g4:395b8da9-e6a6-4368-a791-5dcfbc6a290e/result.json`,
          },
        },
        status: `completed`,
        timeTook: 35.269,
      },
      pipeline: {
        name: `fzylk0g4`,
        nodes: [
          {
            nodeName: `fzylk0g4`,
            algorithmName: `fzylk0g4`,
            input: [4],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:fzylk0g4:395b8da9-e6a6-4368-a791-5dcfbc6a290e`,
        startTime: 1584867296270,
        lastRunResult: null,
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:fzylk0g4:395b8da9-e6a6-4368-a791-5dcfbc6a290e`,
        timestamp: 1584867331555,
        edges: [],
        nodes: [
          {
            nodeName: `fzylk0g4`,
            algorithmName: `fzylk0g4`,
            taskId: `fzylk0g4:fzylk0g4:e1940d40-5e50-4604-b7a0-5e20846c08de`,
            input: [4],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:fzylk0g4:395b8da9-e6a6-4368-a791-5dcfbc6a290e/fzylk0g4:fzylk0g4:e1940d40-5e50-4604-b7a0-5e20846c08de`,
              },
            },
            podName: `fzylk0g4-e48169c3c847f4535732397e1d1cd4-twhxj`,
            status: `succeed`,
            startTime: 1584867327217,
            endTime: 1584867331485,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:cfwuci2x:2e3597d5-85df-4764-bd36-58643f02ef26`,
      status: {
        timestamp: `2020-03-22T08:54:36.322Z`,
        jobId: `main:cfwuci2x:2e3597d5-85df-4764-bd36-58643f02ef26`,
        status: `completed`,
        level: `info`,
        pipeline: `cfwuci2x`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-22T08:55:03.243Z`,
        jobId: `main:cfwuci2x:2e3597d5-85df-4764-bd36-58643f02ef26`,
        pipeline: `cfwuci2x`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:cfwuci2x:2e3597d5-85df-4764-bd36-58643f02ef26/result.json`,
          },
        },
        status: `completed`,
        timeTook: 27.734,
      },
      pipeline: {
        name: `cfwuci2x`,
        nodes: [
          {
            nodeName: `cfwuci2x`,
            algorithmName: `cfwuci2x`,
            input: [4],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:cfwuci2x:2e3597d5-85df-4764-bd36-58643f02ef26`,
        startTime: 1584867275509,
        lastRunResult: null,
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:cfwuci2x:2e3597d5-85df-4764-bd36-58643f02ef26`,
        timestamp: 1584867303269,
        edges: [],
        nodes: [
          {
            nodeName: `cfwuci2x`,
            algorithmName: `cfwuci2x`,
            taskId: `cfwuci2x:cfwuci2x:92b8484b-d978-4bf1-9d51-51d64d466832`,
            input: [4],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:cfwuci2x:2e3597d5-85df-4764-bd36-58643f02ef26/cfwuci2x:cfwuci2x:92b8484b-d978-4bf1-9d51-51d64d466832`,
              },
            },
            podName: `cfwuci2x-0be7613673aa99e5eb38b7ea2d0973-5b844`,
            status: `succeed`,
            startTime: 1584867299092,
            endTime: 1584867303192,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:cfwuci2x:294c5982-ce56-4ff0-b0a3-0a6de3f89828`,
      status: {
        timestamp: `2020-03-22T08:53:56.148Z`,
        jobId: `main:cfwuci2x:294c5982-ce56-4ff0-b0a3-0a6de3f89828`,
        status: `completed`,
        level: `info`,
        pipeline: `cfwuci2x`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-22T08:54:52.411Z`,
        jobId: `main:cfwuci2x:294c5982-ce56-4ff0-b0a3-0a6de3f89828`,
        pipeline: `cfwuci2x`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:cfwuci2x:294c5982-ce56-4ff0-b0a3-0a6de3f89828/result.json`,
          },
        },
        status: `completed`,
        timeTook: 56.454,
      },
      pipeline: {
        name: `cfwuci2x`,
        nodes: [
          {
            nodeName: `cfwuci2x`,
            algorithmName: `cfwuci2x`,
            input: [4],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:cfwuci2x:294c5982-ce56-4ff0-b0a3-0a6de3f89828`,
        startTime: 1584867235957,
        lastRunResult: null,
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:cfwuci2x:294c5982-ce56-4ff0-b0a3-0a6de3f89828`,
        timestamp: 1584867292476,
        edges: [],
        nodes: [
          {
            nodeName: `cfwuci2x`,
            algorithmName: `cfwuci2x`,
            taskId: `cfwuci2x:cfwuci2x:a9058a23-b138-4fe4-9907-e11f40efda1e`,
            input: [4],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:cfwuci2x:294c5982-ce56-4ff0-b0a3-0a6de3f89828/cfwuci2x:cfwuci2x:a9058a23-b138-4fe4-9907-e11f40efda1e`,
              },
            },
            podName: `cfwuci2x-2bb5c4987df15038e9c9f9e00a1b88-m4vh8`,
            status: `succeed`,
            startTime: 1584867288284,
            endTime: 1584867292348,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:qtitsy48:72d2739f-9b6b-4d1a-99da-40c8103633ef`,
      status: {
        timestamp: `2020-03-19T10:56:21.901Z`,
        jobId: `main:qtitsy48:72d2739f-9b6b-4d1a-99da-40c8103633ef`,
        status: `completed`,
        level: `info`,
        pipeline: `qtitsy48`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-19T10:57:29.218Z`,
        jobId: `main:qtitsy48:72d2739f-9b6b-4d1a-99da-40c8103633ef`,
        pipeline: `qtitsy48`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:qtitsy48:72d2739f-9b6b-4d1a-99da-40c8103633ef/result.json`,
          },
        },
        status: `completed`,
        timeTook: 67.406,
      },
      pipeline: {
        name: `qtitsy48`,
        nodes: [
          {
            nodeName: `qtitsy48`,
            algorithmName: `qtitsy48`,
            input: [4],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:qtitsy48:72d2739f-9b6b-4d1a-99da-40c8103633ef`,
        startTime: 1584615381812,
        lastRunResult: null,
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:qtitsy48:72d2739f-9b6b-4d1a-99da-40c8103633ef`,
        timestamp: 1584615449237,
        edges: [],
        nodes: [
          {
            nodeName: `qtitsy48`,
            algorithmName: `qtitsy48`,
            taskId: `qtitsy48:qtitsy48:1af31e8e-41d0-413d-b56a-ed3ddf5faa9a`,
            input: [4],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:qtitsy48:72d2739f-9b6b-4d1a-99da-40c8103633ef/qtitsy48:qtitsy48:1af31e8e-41d0-413d-b56a-ed3ddf5faa9a`,
              },
            },
            podName: `qtitsy48-05def5968a7adf15564c83d7d9ab3d-9vbvp`,
            status: `succeed`,
            startTime: 1584615448041,
            endTime: 1584615449153,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
    {
      key: `main:green-alg:4b5ba067-a86a-41b5-98eb-0d3c98eb34f8`,
      status: {
        timestamp: `2020-03-19T10:33:24.960Z`,
        jobId: `main:green-alg:4b5ba067-a86a-41b5-98eb-0d3c98eb34f8`,
        status: `completed`,
        level: `info`,
        pipeline: `green-alg`,
        data: {
          progress: 100,
          details: `100% completed, 1 succeed`,
          states: {
            succeed: 1,
          },
        },
      },
      results: {
        timestamp: `2020-03-19T10:33:49.499Z`,
        jobId: `main:green-alg:4b5ba067-a86a-41b5-98eb-0d3c98eb34f8`,
        pipeline: `green-alg`,
        data: {
          storageInfo: {
            path: `pub-hkube-results/main:green-alg:4b5ba067-a86a-41b5-98eb-0d3c98eb34f8/result.json`,
          },
        },
        status: `completed`,
        timeTook: 24.653,
      },
      pipeline: {
        name: `green-alg`,
        nodes: [
          {
            nodeName: `green-alg`,
            algorithmName: `green-alg`,
            input: [1],
          },
        ],
        experimentName: `main`,
        options: {
          ttl: 3600,
          batchTolerance: 80,
          progressVerbosityLevel: `info`,
        },
        priority: 3,
        jobId: `main:green-alg:4b5ba067-a86a-41b5-98eb-0d3c98eb34f8`,
        startTime: 1584614004846,
        lastRunResult: {
          timestamp: `2020-03-17T14:27:23.371Z`,
          status: `completed`,
          timeTook: 2.683,
        },
        types: [`algorithm`],
      },
      graph: {
        jobId: `main:green-alg:4b5ba067-a86a-41b5-98eb-0d3c98eb34f8`,
        timestamp: 1584614029542,
        edges: [],
        nodes: [
          {
            nodeName: `green-alg`,
            algorithmName: `green-alg`,
            taskId: `green-alg:green-alg:254d7af8-4b48-4770-a140-81bfe70350bd`,
            input: [1],
            output: {
              metadata: {},
              storageInfo: {
                path: `pub-hkube/main:green-alg:4b5ba067-a86a-41b5-98eb-0d3c98eb34f8/green-alg:green-alg:254d7af8-4b48-4770-a140-81bfe70350bd`,
              },
            },
            podName: `green-alg-92b3cd2ed8c0e42c8f6b831651bdc5-wsp2t`,
            status: `succeed`,
            startTime: 1584614028171,
            endTime: 1584614029384,
            level: 0,
            batch: null,
            boards: [],
          },
        ],
      },
    },
  ],
};
