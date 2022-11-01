function get_paper_by_id()
{

    paper_id = {'22': ['m1', 's1'], '26': ['m1', 's1'], '97': ['m1', 's1'], '125': ['m1', 's1'], '164': ['m1', 's1'], '122': ['m1', 's1'], 
                '19': ['m1', 's2'], '20': ['m1', 's2'], '21': ['m1', 's2'], '42': ['m1', 's2'], '113': ['m1', 's2'], '126': ['m1', 's2'], '145': ['m1', 's2'], 
                '186': ['m1', 's3'], '188': ['m1', 's3'], '123': ['m1', 's3'], '116': ['m1', 's3'], '72': ['m1', 's3'], '115': ['m1', 's3'], 
                '32': ['m1', 's4'], '120': ['m1', 's4'], '175': ['m1', 's4'], '150': ['m1', 's4'], '160': ['m1', 's4'], '169': ['m1', 's4'], 
                '2': ['m1', 's5'], '5': ['m1', 's5'], '4': ['m1', 's5'], '16': ['m1', 's5'], '25': ['m1', 's5'], '29': ['m1', 's5'], '40': ['m1', 's5'], '127': ['m1', 's5'], 
                '10': ['m1', 's6'], '12': ['m1', 's6'], '147': ['m1', 's6'], '154': ['m1', 's6'], '13': ['m1', 's6'], '33': ['m1', 's6'], '100': ['m1', 's6'], '27': ['m1', 's6'], 
                '144': ['m1', 's7'], '148': ['m1', 's7'], '158': ['m1', 's7'], '165': ['m1', 's7'], '170': ['m1', 's7'], '185': ['m1', 's7'], '9': ['m1', 's7'], 
                '1': ['m2', 's8'], '28': ['m2', 's8'], '117': ['m2', 's8'], '153': ['m2', 's8'], '192': ['m2', 's8'], '44': ['m2', 's8'], 
                '7': ['m2', 's9'], '15': ['m2', 's9'], '124': ['m2', 's9'], '155': ['m2', 's9'], '167': ['m2', 's9'], '161': ['m2', 's9'], 
                '159': ['m2', 's9', 's10'], '23': ['m2', 's10'], '102': ['m2', 's10'], '141': ['m2', 's10'], '190': ['m2', 's10'], '189': ['m2', 's10'], 
                '146': ['m2', 's11'], '18': ['m2', 's11'], '83': ['m2', 's11'], '84': ['m2', 's11'], '99': ['m2', 's11'], '114': ['m2', 's11']}

    id = document.getElementById('pid').value;
    search_box = document.getElementById('pid');
    search_box.value = '';

    if (id == 'all')
    {
        Previous_s2 = document.getElementById('previous_s2');
        Previous_s2.innerHTML = 'all';
        paper_ids = Object.keys(paper_id);
        paper_ids.push('159_1');
        ms = ['m1', 'm2'];
        ss = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11'];
        for (var i = 0; i < paper_ids.length; i++)
        {
            element = document.getElementById('p' + paper_ids[i]);
            element.className = '';
        }
        for (var i = 0; i < ms.length; i++)
        {
            element = document.getElementById(ms[i]);
            element.className = 'pt-1 mb-5 font-titleFont text-xl text-mainPurple font-extrabold';
        }
        for (var i = 0; i < ss.length; i++)
        {
            element = document.getElementById(ss[i]);
            element.className = 'pt-1 mb-5 font-titleFont text-l text-mainPurple font-extrabold';
        }
        return;
    }

    if (Object.keys(paper_id).includes(id))
    {
        Previous_pid = document.getElementById('previous_pid');
        previous_pid = Previous_pid.innerHTML;
        Previous_m = document.getElementById('previous_m');
        previous_m = Previous_m.innerHTML;
        Previous_s = document.getElementById('previous_s');
        previous_s = Previous_s.innerHTML;
        Previous_s2 = document.getElementById('previous_s2');
        previous_s2 = Previous_s2.innerHTML;

        if (previous_pid != 'N')
        {
            element = document.getElementById(previous_pid);
            element.className += ' j_table_not_display';
            Previous_pid.innerHTML = 'N';
        }
        if (previous_m != 'N')
        {
            element = document.getElementById(previous_m);
            element.className += ' j_table_not_display';
            Previous_m.innerHTML = 'N';
        }
        if (previous_s != 'N')
        {
            element = document.getElementById(previous_s);
            element.className += ' j_table_not_display';
            Previous_s.innerHTML = 'N';
        }
        if (previous_s2 != 'N')
        {
            if (previous_s2 == 'all')
            {
                paper_ids = Object.keys(paper_id);
                paper_ids.push('159_1');
                ms = ['m1', 'm2'];
                ss = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11'];
                for (var i = 0; i < paper_ids.length; i++)
                {
                    element = document.getElementById('p' + paper_ids[i]);
                    element.className = 'j_table_not_display';
                }
                for (var i = 0; i < ms.length; i++)
                {
                    element = document.getElementById(ms[i]);
                    element.className = 'pt-1 mb-5 font-titleFont text-xl text-mainPurple font-extrabold j_table_not_display';
                }
                for (var i = 0; i < ss.length; i++)
                {
                    element = document.getElementById(ss[i]);
                    element.className = 'pt-1 mb-5 font-titleFont text-l text-mainPurple font-extrabold j_table_not_display';
                }
            }
            else
            {
                element = document.getElementById('p159_1');
                element.className += ' j_table_not_display';
                element = document.getElementById(previous_s2);
                element.className += ' j_table_not_display';
                Previous_s2.innerHTML = 'N';
            }
        }
        
        table_id = 'p' + id;
        table = document.getElementById(table_id);
        element = document.getElementById(paper_id[id][0]);
        element.className = 'pt-1 mb-5 font-titleFont text-xl text-mainPurple font-extrabold';
        element = document.getElementById(paper_id[id][1]);
        element.className = 'pt-1 mb-5 font-titleFont text-l text-mainPurple font-extrabold';
        table.className = '';
        Previous_pid = document.getElementById('previous_pid');
        Previous_pid.innerHTML = table_id;
        Previous_m = document.getElementById('previous_m');
        Previous_m.innerHTML = paper_id[id][0];
        Previous_s = document.getElementById('previous_s');
        Previous_s.innerHTML = paper_id[id][1];
        if (id == '159')
        {
            table_2 = document.getElementById(table_id + '_1');
            element = document.getElementById(paper_id[id][2]);
            element.className = 'pt-1 mb-5 font-titleFont text-l text-mainPurple font-extrabold';
            table_2.className = '';
            Previous_s2 = document.getElementById('previous_s2');
            Previous_s2.innerHTML = paper_id[id][2];
        }
    }
    else
    {
        alert ('Sorry. Cannot find any information about paper with ID ' + String(id) + '.');
    }
}