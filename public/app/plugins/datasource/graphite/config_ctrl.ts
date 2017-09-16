///<reference path="../../../headers/common.d.ts" />

import angular from 'angular';
import _ from 'lodash';

export class GraphiteConfigCtrl {
  static templateUrl = 'public/app/plugins/datasource/graphite/partials/config.html';
  current: any;

  /** @ngInject */
  constructor($scope) {
    this.current.jsonData = this.current.jsonData || {};
    this.current.jsonData.graphiteVersion = this.current.jsonData.graphiteVersion || '0.9';
    this.current.jsonData.bucketSizeSeconds = this.current.jsonData.bucketSizeSeconds || 60;
  }

  graphiteVersions = [
    {name: '0.9.x', value: '0.9'},
    {name: '1.0.x', value: '1.0'},
  ];

  bucketSizes = [
    {name: '1s', value: '1'},
    {name: '5s', value: '5'},
    {name: '10s', value: '10'},
    {name: '15s', value: '15'},
    {name: '30s', value: '30'},
    {name: '60s', value: '60'},
  ];
}
