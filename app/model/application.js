'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const ApplicationSchema = new Schema({
        name: { type: String }, // 应用名称
        code: { type: String }, // 应用编码
        user_name: { type: String }, // 操作人
        team_code: { type: String }, // 所属公司编码
        environ_code: { type: String }, // 所属环境编码
        net_type: { type: Number, default: 1 }, // 网络部署IP说明 1：外网IP  2：内网IP
        assets_list: { type: Array }, // 拥有资产列表
        task_list: { type: Array }, // 任务list
        email_list: { type: Array }, // 绑定邮箱列表
        status: { type: Number, default: 1 }, // 可用装填 1：可用  0：禁用
        create_time: { type: Date, default: Date.now }, // 创建时间
    });

    return mongoose.model('Application', ApplicationSchema);
};
