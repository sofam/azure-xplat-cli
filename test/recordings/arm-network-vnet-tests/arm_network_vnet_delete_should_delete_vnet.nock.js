// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualnetworks/test-vnet?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"3f9fc1d2-050b-4b00-8006-081c776b8c03\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9f3c672d-6ddf-4ffa-99b2-1b732c3673ab\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\",\r\n        \"10.0.1.0/24\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"192.168.1.1\",\r\n        \"192.168.1.2\"\r\n      ]\r\n    },\r\n    \"subnets\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '752',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"3f9fc1d2-050b-4b00-8006-081c776b8c03"',
  'x-ms-request-id': '6ace60d7-b450-4fc1-a06d-c38b7d501815',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '4b4088a2-b4be-47c7-ac1c-7f6c07eacf3b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T115008Z:4b4088a2-b4be-47c7-ac1c-7f6c07eacf3b',
  date: 'Fri, 25 Mar 2016 11:50:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualnetworks/test-vnet?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"3f9fc1d2-050b-4b00-8006-081c776b8c03\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9f3c672d-6ddf-4ffa-99b2-1b732c3673ab\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\",\r\n        \"10.0.1.0/24\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"192.168.1.1\",\r\n        \"192.168.1.2\"\r\n      ]\r\n    },\r\n    \"subnets\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '752',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"3f9fc1d2-050b-4b00-8006-081c776b8c03"',
  'x-ms-request-id': '6ace60d7-b450-4fc1-a06d-c38b7d501815',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '4b4088a2-b4be-47c7-ac1c-7f6c07eacf3b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T115008Z:4b4088a2-b4be-47c7-ac1c-7f6c07eacf3b',
  date: 'Fri, 25 Mar 2016 11:50:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualnetworks/test-vnet?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operationResults/84482951-7f1a-40e6-8503-2dc7f4d960e6?api-version=2016-03-30',
  'retry-after': '10',
  'x-ms-request-id': '84482951-7f1a-40e6-8503-2dc7f4d960e6',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/84482951-7f1a-40e6-8503-2dc7f4d960e6?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '928113f3-7df4-4de0-9a7f-3c193e2510fd',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T115010Z:928113f3-7df4-4de0-9a7f-3c193e2510fd',
  date: 'Fri, 25 Mar 2016 11:50:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualnetworks/test-vnet?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operationResults/84482951-7f1a-40e6-8503-2dc7f4d960e6?api-version=2016-03-30',
  'retry-after': '10',
  'x-ms-request-id': '84482951-7f1a-40e6-8503-2dc7f4d960e6',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/84482951-7f1a-40e6-8503-2dc7f4d960e6?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '928113f3-7df4-4de0-9a7f-3c193e2510fd',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T115010Z:928113f3-7df4-4de0-9a7f-3c193e2510fd',
  date: 'Fri, 25 Mar 2016 11:50:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/84482951-7f1a-40e6-8503-2dc7f4d960e6?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8f890cea-0784-4996-9365-2ce527889c3a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '22a0f6b5-3893-43f5-b75e-e0fd70a0f1cb',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T115041Z:22a0f6b5-3893-43f5-b75e-e0fd70a0f1cb',
  date: 'Fri, 25 Mar 2016 11:50:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/84482951-7f1a-40e6-8503-2dc7f4d960e6?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8f890cea-0784-4996-9365-2ce527889c3a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '22a0f6b5-3893-43f5-b75e-e0fd70a0f1cb',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T115041Z:22a0f6b5-3893-43f5-b75e-e0fd70a0f1cb',
  date: 'Fri, 25 Mar 2016 11:50:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualnetworks/test-vnet?api-version=2016-03-30')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/test-vnet' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'bf075e4b-d63c-4a6d-becc-bfd9d840510b',
  'x-ms-correlation-request-id': 'bf075e4b-d63c-4a6d-becc-bfd9d840510b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T115042Z:bf075e4b-d63c-4a6d-becc-bfd9d840510b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 11:50:42 GMT',
  connection: 'close',
  'content-length': '162' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualnetworks/test-vnet?api-version=2016-03-30')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/test-vnet' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'bf075e4b-d63c-4a6d-becc-bfd9d840510b',
  'x-ms-correlation-request-id': 'bf075e4b-d63c-4a6d-becc-bfd9d840510b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T115042Z:bf075e4b-d63c-4a6d-becc-bfd9d840510b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 11:50:42 GMT',
  connection: 'close',
  'content-length': '162' });
 return result; }]];