/**
 * HABmin - Home Automation User and Administration Interface
 * Designed for openHAB (www.openhab.com)
 *
 * This software is copyright of Chris Jackson under the GPL license.
 * Note that this licence may be changed at a later date.
 *
 * (c) 2014-2015 Chris Jackson (chris@cd-jackson.com)
 */
angular.module('bootstrapCombo', [
])
    .directive('bootstrapCombo', function ($compile) {
        return {
            restrict: 'E',
            scope: {
                items: '=dropdownData',
                selectedItem: '=preselectedItem',
                ngModel: '=',
                placeholder: '@'
            },
            link: function (scope, element, attrs) {

                scope.selectVal = function (item) {
                    scope.ngModel = item.value;
                };

                var html = '';
                html += '  <div class="input-group">';
                html += '    <input class="form-control" type="text" data-ng-model ="ngModel" data-ng-attr-placeholder="{{placeholder}}" />';
                html += '    <div class="input-group-btn" data-ng-if="items.length">';
                html += '      <div class="btn-group ">';
                html += '        <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" >';
                html += '          <span class="caret"></span>';
                html += '        </button>';
                html += '        <ul class="dropdown-menu dropdown-menu-right dropdown-scroll" role="menu">';
                html += '          <li data-ng-repeat="item in items"><a data-ng-href="" role="menuitem" tabindex="-1" data-ng-click="selectVal(item)">{{item.label}}</a></li>';
                html += '        </ul>';
                html += '      </div>';
                html += '    </div>';
                html += '  </div>';

                element.append($compile(html)(scope));
            }
        };
    })
;