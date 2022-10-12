const logger = DeviceRuntimeCore.HmLogger.getLogger('helloworld')
Page({
	build() {
		logger.debug('page build invoked')
		hmUI.createWidget(hmUI.widget.TEXT, {
			..."demo app",
		})
	},
	onInit() {
		logger.debug('page onInit invoked')
	},

	onDestroy() {
		logger.debug('page onDestroy invoked')
	},
})