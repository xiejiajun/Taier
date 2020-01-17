package com.dtstack.task.server.zk.listener;

import com.dtstack.task.common.util.ExceptionUtil;
import com.dtstack.task.common.util.LogCountUtil;
import com.dtstack.task.common.TaskThreadFactory;
import com.dtstack.task.server.zk.ZkService;
import com.dtstack.task.server.zk.data.BrokerHeartNode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;


/**
 * company: www.dtstack.com
 * author: toutian
 * create: 2019/10/22
 */
public class HeartBeatListener implements Listener {

    private static final Logger logger = LoggerFactory.getLogger(HeartBeatListener.class);

    private int logOutput = 0;
    private final static int MULTIPLES = 10;
    private final static int CHECK_INTERVAL = 1000;

    private final ScheduledExecutorService scheduledService;

    private ZkService zkService;

    public HeartBeatListener(ZkService zkService) {
        this.zkService = zkService;

        scheduledService = new ScheduledThreadPoolExecutor(1, new TaskThreadFactory("HeartBeatListener"));
        scheduledService.scheduleWithFixedDelay(
                this,
                0,
                CHECK_INTERVAL,
                TimeUnit.MILLISECONDS);
    }

    @Override
    public void run() {
        try {
            logOutput++;
            BrokerHeartNode brokerHeartNode = BrokerHeartNode.initBrokerHeartNode();
            brokerHeartNode.setSeq(1L);
            brokerHeartNode.setAlive(true);
            zkService.updateSynchronizedLocalBrokerHeartNode(zkService.getLocalAddress(), brokerHeartNode, false);
            if (LogCountUtil.count(logOutput, MULTIPLES)) {
                logger.info("HeartBeatListener start again...");
            }
        } catch (Throwable e) {
            logger.error(ExceptionUtil.getErrorMessage(e));
        }
    }

    @Override
    public void close() throws Exception {
        scheduledService.shutdownNow();
    }
}
