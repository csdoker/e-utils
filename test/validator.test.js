import validator from './../lib/validator';

describe('validator', () => {
	test('测试校验邮箱', () => {
		expect(validator.isEmail('121212@')).not.toBeTruthy();
		expect(validator.isEmail('121212@58')).not.toBeTruthy();
		expect(validator.isEmail('121212@5.com')).not.toBeTruthy();
		expect(validator.isEmail('121212@gamil.com')).toBeTruthy();
	});
	test('测试校验手机号', () => {
		expect(validator.isMobilePhone('121212')).not.toBeTruthy();
		expect(validator.isMobilePhone('18513833315')).toBeTruthy();
	});
	test('测试校验身份证', () => {
		//长度校验
		expect(validator.isCreditCard('121212')).not.toBeTruthy();
		//地区码校验
		expect(validator.isCreditCard('160105194912310029')).not.toBeTruthy();
		//生日校验
		expect(validator.isCreditCard('110105194902310026')).not.toBeTruthy();
		//校验码校验
		expect(validator.isCreditCard('110105194912310021')).not.toBeTruthy();
		//15为身份证校验
		expect(validator.isCreditCard('110105491331002')).not.toBeTruthy();
		expect(validator.isCreditCard('110105491231002')).toBeTruthy();
		//150122199010194636
		expect(validator.isCreditCard('11010519491231002X')).toBeTruthy();
	});
});
