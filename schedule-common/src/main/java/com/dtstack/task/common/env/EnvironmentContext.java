package com.dtstack.task.common.env;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;


/**
 * @author sishu.yss
 */
@Component
@PropertySource(value = "file:${user.dir}/conf/application.properties", ignoreResourceNotFound = false)
public class EnvironmentContext {

    @Autowired
    private Environment environment;

    /**
     * =========base=======
     */
    public String getNodeZkAddress() {
        return environment.getProperty("nodeZkAddress");
    }

    public String getLocalAddress() {
        return environment.getProperty("localAddress");
    }

    public String getSecurity() {
        return environment.getProperty("security");
    }

    public int getQueueSize() {
        return Integer.parseInt(environment.getProperty("queueSize", "5000"));
    }

    public Long getAcquireQueueJobInterval() {
        return Long.parseLong(environment.getProperty("acquireQueueJobInterval", "3000"));
    }

    public Integer getCycTimeDayGap() {
        return Math.abs(Integer.parseInt(environment.getProperty("cycTimeDayGap", "0")));
    }

    public long getJobStatusDealerInterval() {
        return Integer.parseInt(environment.getProperty("jobStatusDealerInterval", "3000"));
    }

    public String getAlarmTitle() {
        String alarmTitle = environment.getProperty("alarmTitle");
        return StringUtils.isNotBlank(alarmTitle) ? alarmTitle : "袋鼠云数栈";
    }

    public long getAlarmProcessorInterval() {
        return Integer.parseInt(environment.getProperty("alarmProcessorInterval", "60000"));
    }

    /**
     * =========jdbc=======
     */
    public String getJdbcDriverClassName() {
        return environment.getProperty("jdbc.driverClassName");
    }

    public String getJdbcUrl() {
        return environment.getProperty("jdbc.url");
    }

    public String getJdbcPassword() {
        return environment.getProperty("jdbc.password");
    }

    public String getJdbcUser() {
        return environment.getProperty("jdbc.username");
    }

    public int getmMaxPoolSize() {
        return Integer.parseInt(environment.getProperty("max.pool.size", "30"));
    }

    public int getMinPoolSize() {
        return Integer.parseInt(environment.getProperty("min.pool.size", "5"));
    }

    public int getInitialPoolSize() {
        return Integer.parseInt(environment.getProperty("initial.pool.size", "5"));
    }

    public int getCheckTimeout() {
        return Integer.parseInt(environment.getProperty("check.timeout", "10000"));
    }

    /**
     * =========mybatis=======
     */

    public String getMybatisMapperLocations() {
        return environment.getProperty("mybatis.mapper-locations", "classpath*:sqlmap/*-mapper.xml");
    }

    public String getMybatisConfigLocation() {
        return environment.getProperty("mybatis.config-location", "classpath:mybatis-config.xml");
    }

    /**
     * =========end=======
     */
    public Integer getHttpPort() {
        return Integer.parseInt(environment.getProperty("http.port", "9020"));
    }

    public String getHttpAddress() {
        return environment.getProperty("http.address","0.0.0.0");
    }

    /**
     * =========redis=======
     */

    public int getRedisDB() {
        return Integer.parseInt(environment.getProperty("redis.db", "1"));
    }

    public int getCacheActiveCount() {
        return Integer.parseInt(environment.getProperty("ehredis.active.count", "10"));
    }

    public boolean getCacheActiveRedis() {
        return Boolean.parseBoolean(environment.getProperty("ehredis.active.redis", "true"));
    }

    public int getCacheLiveTime() {
        return Integer.parseInt(environment.getProperty("ehredis.live.time", "3600"));
    }

    public String getRedisUrl() {
        return environment.getProperty("redis.url", "127.0.0.1");
    }

    public int getRedisPort() {
        return Integer.parseInt(environment.getProperty("redis.port", "6379"));
    }

    public int getMaxIdle() {
        return Integer.parseInt(environment.getProperty("redis.max.idle", "30"));
    }


    public int getRedisTimeout() {
        return Integer.parseInt(environment.getProperty("redis.timeout", "3000"));
    }


    public String getRedisPassword() {
        return environment.getProperty("redis.password");
    }

    public int getMaxTotal() {
        return Integer.parseInt(environment.getProperty("redis.max.total", "50"));
    }

    public int getMaxWaitMills() {
        return Integer.parseInt(environment.getProperty("redis.max.wait..millis", "1000"));
    }

    public int getRdosSessionExpired() {
        return Integer.parseInt(environment.getProperty("web.session.expired", "1800"));
    }

    public String getRedisSentinel(){
        return environment.getProperty("redis.sentinel", "");
    }

    /**
     * ===============hadoop ===============
     */

    public String getHadoopUserName() {
        return environment.getProperty("hadoop.user.name", "admin");
    }

    public String getHdfsBatchPath() {
        return environment.getProperty("hdfs.batch.path", "/rdos/batch/");
    }

    /**
     * =======vertx======
     */

    public int getInstances() {
        return Integer.parseInt(environment.getProperty("vertx.instance", String.valueOf(2 * Runtime.getRuntime().availableProcessors())));
    }

    public int getEventLoopPoolSize() {
        return Integer.parseInt(environment.getProperty("event.pool.size", String.valueOf(2 * Runtime.getRuntime().availableProcessors())));
    }

    public int getWorkerPoolSize() {
        return Integer.parseInt(environment.getProperty("worker.pool.size", "1000"));
    }

    public long getMaxWorkerExecuteTime() {
        return Long.parseLong(environment.getProperty("max.worker.execute.time", String.valueOf(1 * 60 * 1000 * 1000000L)));
    }

    public String getJobGraphBuildCron() {
        return environment.getProperty("batch.job.graph.build.cron", "22:00:00");
    }


    public String getEngineNode() {
        return environment.getProperty("engine.node");
    }

    public String getMasterLock() {
        return environment.getProperty("master.lock", "master_lock");
    }

    public String getConsoleNode() {
        return environment.getProperty("console.node");
    }

    public String getSdkToken() {
        return environment.getProperty("sdk.token");
    }


    public String getHdfsTaskPath() {
        return environment.getProperty("hdfs.task.path", "/dtInsight/task/");
    }
    /**
     * ====end=======
     */
}
