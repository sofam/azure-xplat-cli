// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jsxplat';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jsxplat.centralus.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jsxplat.centralus.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes?api-version=2015-12-01.2.2&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jsxplat.centralus.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-4036039286_1-20160321t221745z\",\"url\":\"https://jsxplat.centralus.batch.azure.com/pools/xplatTestPool/nodes/tvm-4036039286_1-20160321t221745z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-03-21T22:22:52.1517297Z\",\"lastBootTime\":\"2016-03-21T22:22:52.075738Z\",\"allocationTime\":\"2016-03-21T22:17:45.9171543Z\",\"ipAddress\":\"100.113.24.26\",\"affinityId\":\"TVM:tvm-4036039286_1-20160321t221745z\",\"vmSize\":\"small\",\"totalTasksRun\":1,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-03-21T22:22:53.2611666Z\",\"endTime\":\"2016-03-21T22:22:53.3991737Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"tvm-4036039286_2-20160321t221745z\",\"url\":\"https://jsxplat.centralus.batch.azure.com/pools/xplatTestPool/nodes/tvm-4036039286_2-20160321t221745z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-03-21T22:21:13.6240548Z\",\"lastBootTime\":\"2016-03-21T22:21:13.5331659Z\",\"allocationTime\":\"2016-03-21T22:17:45.9171543Z\",\"ipAddress\":\"100.112.232.38\",\"affinityId\":\"TVM:tvm-4036039286_2-20160321t221745z\",\"vmSize\":\"small\",\"totalTasksRun\":2,\"recentTasks\":[\r\n        {\r\n          \"taskUrl\":\"https://jsxplat.centralus.batch.azure.com/jobs/xplatJobForFileTests/tasks/xplattask\",\"jobId\":\"xplatJobForFileTests\",\"taskId\":\"xplattask\",\"subtaskId\":0,\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2016-03-22T00:27:41.1983797Z\",\"endTime\":\"2016-03-22T00:27:41.29738Z\",\"exitCode\":0,\"retryCount\":0,\"requeueCount\":0\r\n          }\r\n        }\r\n      ],\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-03-21T22:21:14.7440623Z\",\"endTime\":\"2016-03-21T22:21:14.9890652Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"tvm-4036039286_3-20160321t221745z\",\"url\":\"https://jsxplat.centralus.batch.azure.com/pools/xplatTestPool/nodes/tvm-4036039286_3-20160321t221745z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-03-21T22:21:13.920887Z\",\"lastBootTime\":\"2016-03-21T22:21:13.7968872Z\",\"allocationTime\":\"2016-03-21T22:17:45.9171543Z\",\"ipAddress\":\"100.112.220.90\",\"affinityId\":\"TVM:tvm-4036039286_3-20160321t221745z\",\"vmSize\":\"small\",\"totalTasksRun\":12,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-03-21T22:21:15.5585189Z\",\"endTime\":\"2016-03-21T22:21:15.8628885Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'a44b9eff-c4e2-4622-b562-3f87206c6206',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '0fedcadc-6cdf-4636-85e9-92b715e1d6db',
  dataserviceversion: '3.0',
  date: 'Tue, 22 Mar 2016 00:27:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jsxplat.centralus.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes?api-version=2015-12-01.2.2&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jsxplat.centralus.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-4036039286_1-20160321t221745z\",\"url\":\"https://jsxplat.centralus.batch.azure.com/pools/xplatTestPool/nodes/tvm-4036039286_1-20160321t221745z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-03-21T22:22:52.1517297Z\",\"lastBootTime\":\"2016-03-21T22:22:52.075738Z\",\"allocationTime\":\"2016-03-21T22:17:45.9171543Z\",\"ipAddress\":\"100.113.24.26\",\"affinityId\":\"TVM:tvm-4036039286_1-20160321t221745z\",\"vmSize\":\"small\",\"totalTasksRun\":1,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-03-21T22:22:53.2611666Z\",\"endTime\":\"2016-03-21T22:22:53.3991737Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"tvm-4036039286_2-20160321t221745z\",\"url\":\"https://jsxplat.centralus.batch.azure.com/pools/xplatTestPool/nodes/tvm-4036039286_2-20160321t221745z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-03-21T22:21:13.6240548Z\",\"lastBootTime\":\"2016-03-21T22:21:13.5331659Z\",\"allocationTime\":\"2016-03-21T22:17:45.9171543Z\",\"ipAddress\":\"100.112.232.38\",\"affinityId\":\"TVM:tvm-4036039286_2-20160321t221745z\",\"vmSize\":\"small\",\"totalTasksRun\":2,\"recentTasks\":[\r\n        {\r\n          \"taskUrl\":\"https://jsxplat.centralus.batch.azure.com/jobs/xplatJobForFileTests/tasks/xplattask\",\"jobId\":\"xplatJobForFileTests\",\"taskId\":\"xplattask\",\"subtaskId\":0,\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2016-03-22T00:27:41.1983797Z\",\"endTime\":\"2016-03-22T00:27:41.29738Z\",\"exitCode\":0,\"retryCount\":0,\"requeueCount\":0\r\n          }\r\n        }\r\n      ],\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-03-21T22:21:14.7440623Z\",\"endTime\":\"2016-03-21T22:21:14.9890652Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"tvm-4036039286_3-20160321t221745z\",\"url\":\"https://jsxplat.centralus.batch.azure.com/pools/xplatTestPool/nodes/tvm-4036039286_3-20160321t221745z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-03-21T22:21:13.920887Z\",\"lastBootTime\":\"2016-03-21T22:21:13.7968872Z\",\"allocationTime\":\"2016-03-21T22:17:45.9171543Z\",\"ipAddress\":\"100.112.220.90\",\"affinityId\":\"TVM:tvm-4036039286_3-20160321t221745z\",\"vmSize\":\"small\",\"totalTasksRun\":12,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-03-21T22:21:15.5585189Z\",\"endTime\":\"2016-03-21T22:21:15.8628885Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'a44b9eff-c4e2-4622-b562-3f87206c6206',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '0fedcadc-6cdf-4636-85e9-92b715e1d6db',
  dataserviceversion: '3.0',
  date: 'Tue, 22 Mar 2016 00:27:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jsxplat.centralus.batch.azure.com:443')
  .head('/pools/xplatTestPool/nodes/tvm-4036039286_1-20160321t221745z/files/startup%5Cstdout.txt?api-version=2015-12-01.2.2&timeout=30')
  .reply(200, "", { 'content-length': '6',
  'content-type': 'application/octet-stream',
  'last-modified': 'Mon, 21 Mar 2016 22:22:53 GMT',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '9211278c-e90b-4baa-9797-103754dcdbf1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '1fa2530e-d34b-45e5-bf24-566a5dc73374',
  dataserviceversion: '3.0',
  'ocp-creation-time': 'Mon, 21 Mar 2016 22:22:53 GMT',
  'ocp-batch-file-isdirectory': 'False',
  'ocp-batch-file-url': 'https%3A%2F%2Fjsxplat.centralus.batch.azure.com%2Fpools%2FxplatTestPool%2Fnodes%2Ftvm-4036039286_1-20160321t221745z%2Ffiles%2Fstartup%2Fstdout.txt',
  date: 'Tue, 22 Mar 2016 00:27:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jsxplat.centralus.batch.azure.com:443')
  .head('/pools/xplatTestPool/nodes/tvm-4036039286_1-20160321t221745z/files/startup%5Cstdout.txt?api-version=2015-12-01.2.2&timeout=30')
  .reply(200, "", { 'content-length': '6',
  'content-type': 'application/octet-stream',
  'last-modified': 'Mon, 21 Mar 2016 22:22:53 GMT',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '9211278c-e90b-4baa-9797-103754dcdbf1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '1fa2530e-d34b-45e5-bf24-566a5dc73374',
  dataserviceversion: '3.0',
  'ocp-creation-time': 'Mon, 21 Mar 2016 22:22:53 GMT',
  'ocp-batch-file-isdirectory': 'False',
  'ocp-batch-file-url': 'https%3A%2F%2Fjsxplat.centralus.batch.azure.com%2Fpools%2FxplatTestPool%2Fnodes%2Ftvm-4036039286_1-20160321t221745z%2Ffiles%2Fstartup%2Fstdout.txt',
  date: 'Tue, 22 Mar 2016 00:27:41 GMT',
  connection: 'close' });
 return result; }]];