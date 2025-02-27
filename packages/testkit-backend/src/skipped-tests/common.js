import skip, { ifEquals, ifEndsWith } from './skip'

const skippedTests = [
  skip(
    'Not support by the JS driver',
    ifEquals('neo4j.sessionrun.TestSessionRun.test_partial_iteration')
  ),
  skip(
    'The driver has no support domain_name_resolver',
    ifEndsWith('test_should_successfully_acquire_rt_when_router_ip_changes'),
    ifEndsWith(
      'test_should_request_rt_from_all_initial_routers_until_successful'
    )
  ),
  skip(
    'Driver is start to run tx_function before have a valid connection in hands',
    ifEndsWith(
      'test_should_retry_write_until_success_with_leader_shutdown_during_tx_using_tx_function'
    ),
    ifEndsWith(
      'test_should_retry_write_until_success_with_leader_change_using_tx_function'
    ),
    ifEndsWith('test_should_retry_on_auth_expired_on_begin_using_tx_function')
  ),
  skip(
    'Driver is creating a dedicated connection to check the MultiDBSupport',
    ifEndsWith(
      'test_should_successfully_check_if_support_for_multi_db_is_available'
    )
  ),
  skip(
    'Fails when runned with the full suite',
    ifEndsWith(
      '.test_should_revert_to_initial_router_if_known_router_throws_protocol_errors'
    )
  ),
  skip(
    'It could not guarantee the order of records requests between in the nested transactions',
    ifEquals('stub.iteration.TxRun.test_nested')
  ),
  skip(
    'Keeps retrying on commit despite connection being dropped',
    ifEquals('stub.retry.TestRetry.test_disconnect_on_commit')
  ),
  skip(
    'Wait clarification about verifyConnectivity behaviour when no reader connection is available',
    ifEndsWith(
      '.test_should_use_initial_router_for_discovery_when_others_unavailable'
    ),
    ifEndsWith('.test_should_successfully_get_routing_table_with_context')
  ),
  skip(
    'Driver is executing the second tx for the same session in a diferent server',
    ifEndsWith('test_should_pass_bookmark_from_tx_to_tx_using_tx_run')
  ),
  skip(
    'Driver resolves the address during the record fetch',
    ifEndsWith(
      'test_should_use_resolver_during_rediscovery_when_existing_routers_fail'
    )
  ),
  skip(
    'Needs investigation. It is only failing in the RoutingV3 case',
    ifEndsWith(
      'RoutingV3.test_should_accept_routing_table_without_writers_and_then_rediscover'
    )
  ),
  skip(
    'Needs investigation',
    ifEndsWith(
      'test_should_fail_when_reading_from_unexpectedly_interrupting_reader_using_session_run'
    ),
    ifEquals(
      'stub.tx_run.test_tx_run.TestTxRun.test_rollback_tx_on_session_close_unfinished_result'
    ),
    ifEquals(
      'neo4j.sessionrun.TestSessionRun.test_partial_iteration'
    )
  ),
  skip(
    'Driver does not support mixing Result.subscribe with Result.then',
    ifEquals(
      'stub.iteration.test_result_list.TestResultList.test_tx_run_result_list_pulls_all_records_at_once_next_before_list'
    ),
    ifEquals(
      'stub.iteration.test_result_list.TestResultList.test_tx_func_result_list_pulls_all_records_at_once_next_before_list'
    ),
    ifEquals(
      'stub.iteration.test_result_list.TestResultList.test_session_run_result_list_pulls_all_records_at_once_next_before_list'
    )
  )
]

export default skippedTests
