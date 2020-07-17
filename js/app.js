angular
    .module('demoApp', ['mobiscroll-form', 'mobiscroll-navigation', 'mobiscroll-calendar', 'mobiscroll-datetime', 'mobiscroll-listview', 'mobiscroll-numpad', 'mobiscroll-select'])
    .controller('demoController', ['$scope', function ($scope) {

        // Init tabs
        $scope.menu = {
            type: 'tabs',
            display: 'bottom',
            itemWidth: /(wp)/.test(mobiscroll.autoTheme) ? undefined : 60,
            onItemTap: function (event) {
                document.querySelector('.app-tab-active').classList.remove('app-tab-active');
                document.querySelector('#tab-' + event.target.getAttribute('data-tab')).classList.add('app-tab-active');
            }
        };

        // Home
        // -------

        // Set today
        $scope.todoDate = new Date();

        $scope.todoList = {
            sortable: {
                handle: 'left'
            },
            stages: {
                left: [{
                    key: 'stage1',
                    icon: 'plus',
                    color: '#31c6e7',
                    text: 'Add',
                    action: function (event) {
                        $scope.$apply(function () {
                            $scope.todoData.splice(event.index + 1, 0, {
                                text: "New Todo"
                            });
                        });
                    }

                }],
                right: [{
                    key: 'stage2',
                    color: '#009688',
                    text: 'Remove',
                    icon: 'remove',
                    action: function (event) {
                        $scope.$apply(function () {
                            $scope.todoData.splice(event.index, 1);
                        });
                        return false;
                    }
                }]
            }
        };

        $scope.todoData = [{
            text: "Do the laundry",
            checked: true
        }, {
            text: "Don't forget mom's birthday!",
            checked: true
        }, {
            text: "Buy new shoes"
        }, {
            text: "Need ketchup for pizza"
        }];

        // -------


        // Settings
        // -------

        $scope.sound = {
            ring: 100,
            media: 60,
            alarm: 80
        };

        $scope.notifications = {
            enable: true,
            message: true,
            birthdays: true,
            tags: true
        };

        $scope.pinSettings = {
            template: 'dddd',
            allowLeadingZero: true,
            placeholder: '-',
            mask: '*',
            validate: function (event) {
                return {
                    invalid: event.values.length != 4
                };
            }
        };

        // -------


        // Profile
        // -------

        var now = new Date();

        $scope.birthday = {
            max: new Date(now.getFullYear() - 18, 11, 31)
        };

        $scope.birthday = new Date(1987, 2, 25);

        $scope.language = 'en';

        $scope.gender = 'female';

        // -------

    }]);
